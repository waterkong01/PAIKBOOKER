import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import { PhoneFilled } from "@ant-design/icons";
import Rating from "@mui/material/Rating";
import PcBasicModal from "../../components/PcBasicModal";
import * as Detail from "../../styles/StoreDetailStyle";
import MobileReservationModal1 from "../../components/MobileReservationModal1";
import MobileReservationModal2 from "../../components/MobileReservationModal2";
import LoginModal from "../../components/LoginModal";
import zIndex from "@mui/material/styles/zIndex";

const { kakao } = window;

const StoreDetail = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [menu, setMenu] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmModalMessage, setConfirmModalMessage] = useState("");
  const [isReservationModal1Open, setIsReservationModal1Open] = useState(false);
  const [isReservationModal2Open, setIsReservationModal2Open] = useState(false);
  const [reservationModal1Content, setReservationModal1Content] =
    useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedInUserId") ? true : false
  );

  const menuScrollContainerRef = useRef(null);

  // 정보) 매장 조회
  useEffect(() => {
    const getEachStore = async () => {
      try {
        const response = await AxiosApi.getEachStore(storeNo);
        setStore(response);
      } catch (error) {
        console.error("매장/영업시간 조회 오류 : ", error);
      }
    };
    getEachStore();
  }, [storeNo]);

  // 정보) 별점 조회
  useEffect(() => {
    const getRatingResults = async () => {
      try {
        const response = await AxiosApi.getRatingResults(storeNo);
        console.log(response);
        setRatings(response);
      } catch (error) {
        console.error("별점 가져오기 오류: ", error);
      }
    };
    getRatingResults();
  }, [storeNo]);

  // 지도) 지도 생성
  useEffect(() => {
    if (!store) return;

    //지도를 담을 영역의 DOM 레퍼런스
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.49900095617105, 127.03286623287303), // 지도의 중심좌표
      level: 3, // 지도의 레벨 (확대, 축소 정도)
      zIndex: -1,
    };

    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    const geocoder = new kakao.maps.services.Geocoder();

    // 지도 생성 후에 z-index 설정
    setTimeout(() => {
      const mapWrapper = mapContainer.querySelector(".kakao-map");
      if (mapWrapper) {
        mapWrapper.style.zIndex = "-1"; // 지도 레이어의 z-index를 낮게 설정
      }

      // 마커와 지도 레이어의 z-index를 각각 수정
      const markers = mapContainer.querySelectorAll(".kakao-marker");
      markers.forEach((marker) => {
        marker.style.zIndex = "1"; // 마커의 z-index를 높게 설정
      });

      const mapOverlay = mapContainer.querySelector(".kakao-map-overlay");
      if (mapOverlay) {
        mapOverlay.style.zIndex = "2"; // 오버레이의 z-index를 높게 설정
      }
    }, 100); // 지도 렌더링 후 0.1초 뒤에 z-index 수정

    geocoder.addressSearch(store.storeAddr, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시
        const markerImage = new kakao.maps.MarkerImage(
          store.brandMarker,
          new kakao.maps.Size(50, 50),
          { offset: new kakao.maps.Point(27, 48) }
        );

        const marker = new kakao.maps.Marker({
          position: coords,
          image: markerImage,
          map: map,
        });

        map.setCenter(coords);
      } else {
        console.error("주소 검색 실패:", status);
      }
    });
  }, [store]);

  // 메뉴) 브랜드별 메뉴 조회
  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await AxiosApi.getMenus(storeNo);
        setMenu(response);
      } catch (error) {
        console.error("메뉴 조회 오류 발생 : ", error);
      }
    };
    getMenus();
  }, []);

  // 예약) 예약 가능 및 예약 불가능 시간 조회
  useEffect(() => {
    const getTimes = async () => {
      try {
        const response = await AxiosApi.times(storeNo);
        // 백엔드 API에서 Map 반환 > JSON형식으로 직렬화되어 프론트에 전달
        // 이미 JSON 형식으로 처리되므로 일반 객체로 접근 가능
        setAvailableTimes(response.availableTimes);
        setReservedTimes(response.reservedTimes);
      } catch (error) {
        console.error("예약 가능/불가능 시간 가져오기 증 오류 발생 : ", error);
      }
    };
    getTimes();
  }, [storeNo]);

  // useEffect를 사용하여 상태 값이 변경되었을 때 제대로 처리될 수 있도록 함
  useEffect(() => {
    if (isReservationModal1Open) {
      console.log("모달 내용:", reservationModal1Content);
    }
  }, [isReservationModal1Open, reservationModal1Content]);

  // 정보) 리뷰 평점 계산
  const calculateAverageRating = (ratings) => {
    if (!ratings || ratings.length === 0) return 0;

    const totalPrice = ratings.reduce((sum, rating) => sum + rating.rvPrice, 0);
    const totalTaste = ratings.reduce((sum, rating) => sum + rating.rvTaste, 0);
    const totalVibe = ratings.reduce((sum, rating) => sum + rating.rvVibe, 0);
    const totalKind = ratings.reduce((sum, rating) => sum + rating.rvKind, 0);

    const numberOfRatings = ratings.length;
    const roundToNearestHalf = (value) => Math.round(value * 2) / 2; // 0.5 단위로 반올림

    const avgPrice = roundToNearestHalf(totalPrice / numberOfRatings);
    const avgTaste = roundToNearestHalf(totalTaste / numberOfRatings);
    const avgVibe = roundToNearestHalf(totalVibe / numberOfRatings);
    const avgKind = roundToNearestHalf(totalKind / numberOfRatings);

    return { avgPrice, avgTaste, avgVibe, avgKind };
  };

  const { avgPrice, avgTaste, avgVibe, avgKind } =
    calculateAverageRating(ratings);

  // store 데이터 로드 전 로딩 처리
  if (!store) {
    return <p>Store Loading</p>;
  }

  // 정보) 영업 중/영업 종료 상태 계산
  const openHour = parseInt(store.brandOpen, 10);
  const closeHour = parseInt(store.brandClose, 10);
  const currentHour = new Date().getHours();
  const isOpen =
    currentHour >= openHour && currentHour < closeHour
      ? `영업 중 · ${closeHour}:00에 영업 종료`
      : `영업 종료 · ${openHour}:00에 영업 시작`;

  // 메뉴) 화살표 한번 클릭시 이동량
  const menuScrollAmount = 300;

  // 메뉴) 왼쪽 화살표 클릭
  const menuScrollLeft = () => {
    if (menuScrollContainerRef.current) {
      menuScrollContainerRef.current.scrollBy({
        left: -menuScrollAmount,
      });
    }
  };

  // 메뉴) 오른쪽 화살표 클릭
  const menuScrollRight = () => {
    if (menuScrollContainerRef.current) {
      menuScrollContainerRef.current.scrollBy({
        left: menuScrollAmount,
      });
    }
  };

  // 예약) 현재 시간 이후의 시간만 표시
  const filterTimes = (times) => {
    const currentHour = new Date().getHours(); // 현재 시간 (24시간 형식)
    return times.filter((time) => Number(time) > currentHour);
  };

  // 예약) 예약된시간 / 예약가능시간 나누기
  const filteredAvailableTimes = filterTimes(availableTimes);
  const filteredReservedTimes = filterTimes(reservedTimes);

  // 예약) 합쳐서 정렬
  const combinedTimes = [...reservedTimes, ...availableTimes].sort(
    (a, b) => a - b
  );

  // 예약) 시간선택
  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // 예약) 인원선택
  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
  };

  // 예약) 제출
  const handleSubmit = async () => {
    if (isLoggedIn) {
      if (!selectedTime || !selectedPerson) {
        setConfirmModalMessage("시간과 인원을 모두 선택해주세요.");
        setIsConfirmModalOpen(true);
        return;
      }
      const reservationData = {
        rTime: selectedTime,
        rPersonCnt: selectedPerson,
        storeNo: Number(storeNo),
        storeName: store.storeName,
        userId: localStorage.getItem("loggedInUserId"),
      };
      try {
        await AxiosApi.createReservation(reservationData);
        setSelectedTime(null);
        setSelectedPerson(null);
        // 예약 성공 시 모달 메시지 설정
        setConfirmModalMessage(
          `<span style="font-size: 1.1em;"><strong style="font-size: 1.1em;">${reservationData.userId}</strong> 님</span><br />${store.storeName} ${reservationData.rTime}:00 ${reservationData.rPersonCnt}명<br />예약이 성공적으로 완료되었습니다!`
        );
        setIsConfirmModalOpen(true); // 모달 열기
      } catch (error) {
        setConfirmModalMessage("예약에 실패했습니다.<br />다시 시도해주세요.");
        setIsConfirmModalOpen(true);
      }
    } else {
      setIsLoginModalOpen(true); // 로그인 모달 열기
    }
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false); // 모달 닫기
    window.location.reload(); // 페이지 리로드
  };

  const openReservationModal1 = () => {
    if (isLoggedIn) {
      setIsReservationModal1Open(true);
      setIsReservationModal2Open(false);
    } else {
      setIsLoginModalOpen(true); // 로그인 모달 열기
    }
  };

  const openReservationModal2 = () => {
    setIsReservationModal1Open(false);
    setIsReservationModal2Open(true);
  };

  const closeReservationModal1 = () => {
    setIsReservationModal1Open(false);
    setIsReservationModal2Open(true);
    setReservationModal1Content(null); // 모달 닫기 시 내용 초기화
  };

  const closeReservationModal2 = () => {
    setIsReservationModal2Open(false);
  };

  return (
    <>
      <Detail.Container>
        <Detail.StoreDetailContainer>
          <Detail.StoreDetailLeft>
            <Detail.StoreDetailTitle>{store.storeName}</Detail.StoreDetailTitle>
            <Detail.BrandImgContainer>
              <Detail.BrandImage src={store.brandImg2} />
            </Detail.BrandImgContainer>
            <Detail.StoreInfoContainer>
              <Detail.StoreAddrAndPhoneContainer>
                <Detail.StoreAddr>{store.storeAddr}</Detail.StoreAddr>
                <Detail.StoreHourContainer>{isOpen}</Detail.StoreHourContainer>
                <Detail.StorePhoneContainer>
                  <Detail.StorePhone>{store.storePhone}</Detail.StorePhone>
                  <Detail.StorePhoneImg>
                    <PhoneFilled />
                  </Detail.StorePhoneImg>
                </Detail.StorePhoneContainer>
              </Detail.StoreAddrAndPhoneContainer>
              <Detail.StoreRatingContainer>
                <Detail.StoreRatingText>
                  가격
                  <br />
                  맛
                  <br />
                  분위기
                  <br />
                  친절함
                  <br />
                </Detail.StoreRatingText>
                <Detail.StoreRatingStars>
                  <Rating
                    name="half-rating-read"
                    defaultValue={avgPrice}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "178%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "178%",
                      },
                    }}
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={avgTaste}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "178%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "178%",
                      },
                    }}
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={avgVibe}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                    }}
                  />
                  <Rating
                    name="half-rating-read"
                    defaultValue={avgKind}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(13px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                    }}
                  />
                </Detail.StoreRatingStars>
              </Detail.StoreRatingContainer>
            </Detail.StoreInfoContainer>
            <Detail.StoreLeftMapTitle>
              {store.storeName} 지도
            </Detail.StoreLeftMapTitle>
            <Detail.BrandMapContainer id="map"></Detail.BrandMapContainer>
            <Detail.StoreLeftMenuTitle>
              {store.storeName} 메뉴
            </Detail.StoreLeftMenuTitle>
            <Detail.BrandMenuContainer>
              <Detail.MenuArrowButton
                className="left-arrow"
                onClick={menuScrollLeft}
              >
                &lt;
              </Detail.MenuArrowButton>
              <Detail.MenuImageContainer ref={menuScrollContainerRef}>
                {menu.map((item, index) => (
                  <div key={index}>
                    <img
                      src={item.menu.menuImg}
                      alt={item.menu.menuName}
                      style={{
                        height: "50%",
                        objectFit: "contain",
                        borderRadius: "1em",
                      }}
                    />
                    <br />
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "clamp(14px, 1.3vw, 17px)",
                      }}
                    >
                      {item.menu.menuName}
                    </p>
                    <br />
                  </div>
                ))}
              </Detail.MenuImageContainer>
              <Detail.MenuArrowButton
                className="right-arrow"
                onClick={menuScrollRight}
              >
                &gt;
              </Detail.MenuArrowButton>
            </Detail.BrandMenuContainer>
          </Detail.StoreDetailLeft>

          <Detail.StoreDetailRight>
            <Detail.StoreReservationTitle>예약</Detail.StoreReservationTitle>
            <Detail.StoreReservationContainer>
              <Detail.StoreReservationTimeContainer>
                <Detail.StoreReservationMenuTitle>
                  예약 시간 선택
                </Detail.StoreReservationMenuTitle>
                <Detail.TimeButtonContainer>
                  {combinedTimes.map((time, index) => {
                    const isReserved = filteredReservedTimes.includes(time);
                    const isAvailable = filteredAvailableTimes.includes(time);

                    return isReserved ? (
                      <Detail.TimeButton
                        key={`${time}-${index}`}
                        className="reserved"
                        disabled
                      >
                        {time}:00
                      </Detail.TimeButton>
                    ) : isAvailable ? (
                      <Detail.TimeButton
                        key={`${time}-${index}`}
                        className={`available ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => handleTimeSelect(time)}
                      >
                        {time}:00
                      </Detail.TimeButton>
                    ) : null;
                  })}
                </Detail.TimeButtonContainer>
              </Detail.StoreReservationTimeContainer>
              <Detail.StoreReservationPersonAndConfirmContainer>
                <Detail.StoreReservationPersonContainer>
                  <Detail.StoreReservationSubMenuTitle>
                    인원 선택
                  </Detail.StoreReservationSubMenuTitle>
                  <Detail.PersonButtonContainer>
                    {Array.from({ length: 15 }, (_, i) => i + 1).map(
                      (person) => (
                        <Detail.PersonButton
                          key={person}
                          className={`available ${
                            selectedPerson === person ? "selected" : ""
                          }`}
                          onClick={() => handlePersonSelect(person)}
                        >
                          {person}명
                        </Detail.PersonButton>
                      )
                    )}
                  </Detail.PersonButtonContainer>
                </Detail.StoreReservationPersonContainer>
                <Detail.StoreReservationConfirmContainer>
                  <Detail.StoreReservationSubMenuTitle>
                    예약 내용 확인
                  </Detail.StoreReservationSubMenuTitle>
                  <Detail.StoreReservationConfirmList>
                    <Detail.StoreReservationConfirmIndex
                      style={{ marginTop: "2em" }}
                    >
                      예약지점
                    </Detail.StoreReservationConfirmIndex>
                    <Detail.StoreReservationConfirmContents>
                      {store.storeName}
                    </Detail.StoreReservationConfirmContents>
                    <Detail.StoreReservationConfirmHr />
                    <Detail.StoreReservationConfirmIndex>
                      예약시간
                    </Detail.StoreReservationConfirmIndex>
                    <Detail.StoreReservationConfirmContents>
                      {selectedTime ? `${selectedTime}:00` : ""}
                    </Detail.StoreReservationConfirmContents>
                    <Detail.StoreReservationConfirmHr />
                    <Detail.StoreReservationConfirmIndex>
                      인원수
                    </Detail.StoreReservationConfirmIndex>
                    <Detail.StoreReservationConfirmContents>
                      {selectedPerson ? `${selectedPerson}명` : ""}
                    </Detail.StoreReservationConfirmContents>
                    <Detail.StoreReservationConfirmHr />
                  </Detail.StoreReservationConfirmList>
                  <Detail.SubmitButton
                    className="available"
                    onClick={handleSubmit}
                  >
                    예약하기
                  </Detail.SubmitButton>

                  {/* 모달 표시 */}
                  <PcBasicModal
                    isOpen={isConfirmModalOpen}
                    message={confirmModalMessage}
                    onClose={closeConfirmModal}
                  />
                  {isLoginModalOpen && (
                    <LoginModal onClose={() => setIsLoginModalOpen(false)} />
                  )}
                </Detail.StoreReservationConfirmContainer>
              </Detail.StoreReservationPersonAndConfirmContainer>
            </Detail.StoreReservationContainer>
          </Detail.StoreDetailRight>

          <Detail.MobileReservationButton onClick={openReservationModal1}>
            예약하기
          </Detail.MobileReservationButton>

          {isReservationModal1Open && (
            <MobileReservationModal1
              isOpen={isReservationModal1Open}
              onClose={closeReservationModal1}
            />
          )}
          {isReservationModal2Open && (
            <MobileReservationModal1
              isOpen={isReservationModal2Open}
              onClose={closeReservationModal2}
            />
          )}
          {isLoginModalOpen && (
            <LoginModal
              setIsLoggedIn={setIsLoggedIn}
              closeModal={() => setIsLoginModalOpen(false)}
            />
          )}
        </Detail.StoreDetailContainer>
      </Detail.Container>
    </>
  );
};

export default StoreDetail;
