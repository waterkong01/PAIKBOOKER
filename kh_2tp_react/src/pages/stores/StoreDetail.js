import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StoreDetailReservation from "./StoreDetailReservation";
import StoreDetailMap from "./StoreDetailMap";
import StoreDetailMenu from "./StoreDetailMenu";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { PhoneFilled } from "@ant-design/icons";
import Rating from "@mui/material/Rating";

const Container = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    order: 1;
  }
`;

const StoreName = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  height: auto;
  margin-left: 5%;
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 1%;
    align-items: center;
    order: 2;
  }
`;

const StoreDetailContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 1%;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StoreDetailLeft = styled.div`
  box-sizing: border-box;
  margin-left: 2%;
  margin-right: 1%;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 1%;
    align-items: center;
  }
`;


const BrandImgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin-top: 1%;
  aspect-ratio: 1.5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1em;
  background-color: #f0f0f0;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
  }
`;

const BrandImage = styled.img`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  display: block;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StoreInfoContainer = styled.div`
  box-sizing: border-box;
  margin-top: 1%;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1%;
  flex-wrap: wrap;
`;

const StoreAddrAndPhoneContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 70%;
  display: flex;
  align-content: left;
  flex-direction: column;
`;
const StoreAddr = styled.div`
  box-sizing: border-box;
  font-size: clamp(16px, 1.5vw, 20px);
  text-align: left;
  margin-top: 1%;
`;

const StoreHourContainer = styled.div`
  box-sizing: border-box;
  font-size: clamp(14px, 1.3vw, 17px);
  text-align: left;
  margin-top: 0.8%;
`;

const StorePhoneContainer = styled.div`
  box-sizing: border-box;
  margin-top: 4%;
  display: flex;
  gap: 1.5%;
`;

const StorePhone = styled.div`
  box-sizing: border-box;
  font-size: clamp(16px, 1.5vw, 20px);
  text-align: left;
  position: relative;
`;

const StorePhoneImg = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-top: 5px;
  transform: scale(1.2);
  position: relative;
`;

const StoreRatingContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 29%;
  display: flex;
  align-content: left;
`;

const StoreRatingText = styled.div`
  box-sizing: border-box;
  width: 45%;
  font-size: clamp(12px, 1.2vw, 15px);
  position: relative;
  line-height: 170%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StoreRatingStars = styled.div`
  box-sizing: border-box;
  width: 55%;
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const StoreLeftMenuTitle = styled.div`
  box-sizing: border-box;
  margin-top: 10%;
  width: 100%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
`;

const BrandMapContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin-top: 2%;
  aspect-ratio: 1.5;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 1em;
  background-color: #f0f0f0;
`;

const BrandMenuContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin-top: 2%;
  aspect-ratio: 1.5;
  position: relative;
  display: flex;
  justify-content: left;
  gap: 4%;
  overflow-x: auto;
  overflow-y: hidden;
`;

const StoreDetailRight = styled.div`
  box-sizing: border-box;
  margin-left: 1%;
  margin-right: 2%;
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: sticky;
  top: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const StoreReservationContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin-top: 1%;
  position: relative;
`;

const StoreDetail = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null);
  const [ratings, setRatings] = useState([]);

  // 특정 매장 조회
  useEffect(() => {
    const getEachStore = async () => {
      try {
        const response = await AxiosApi.getEachStore(storeNo);
        setStore(response);
      } catch (error) {
        console.error("특정 매장 조회 오류 : ", error);
      }
    };
    getEachStore();
  }, [storeNo]);

  // 별점 조회
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

  // 리뷰 평점 계산
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

  // 영업 중/영업 종료 상태 계산
  const openHour = parseInt(store.brandOpen, 10);
  const closeHour = parseInt(store.brandClose, 10);
  const currentHour = new Date().getHours();

  const isOpen =
    currentHour >= openHour && currentHour < closeHour
      ? `영업 중 · ${closeHour}:00에 영업 종료`
      : `영업 종료 · ${openHour}:00에 영업 시작`;

  return (
    <>
      <Container>
        <StoreName>{store.storeName}</StoreName>
        <StoreDetailContainer>
          <StoreDetailLeft>
            <BrandImgContainer>
              <BrandImage src={store.brandImg2} />
            </BrandImgContainer>
            <StoreInfoContainer>
              <StoreAddrAndPhoneContainer>
                <StoreAddr>{store.storeAddr}</StoreAddr>
                <StoreHourContainer>{isOpen}</StoreHourContainer>
                <StorePhoneContainer>
                  <StorePhone>{store.storePhone}</StorePhone>
                  <StorePhoneImg>
                    <PhoneFilled />
                  </StorePhoneImg>
                </StorePhoneContainer>
              </StoreAddrAndPhoneContainer>
              <StoreRatingContainer>
                <StoreRatingText>
                  가격
                  <br />
                  맛
                  <br />
                  분위기
                  <br />
                  친절함
                  <br />
                </StoreRatingText>
                <StoreRatingStars>
                  <Rating
                    name="half-rating-read"
                    defaultValue={avgPrice}
                    precision={0.5}
                    readOnly
                    sx={{
                      "& .MuiRating-icon": {
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
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
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
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
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 빈 별 크기
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
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 채워진 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                      "& .MuiRating-iconEmpty": {
                        fontSize: "clamp(12px, 1.2vw, 15px)", // 빈 별 크기
                        margin: 0,
                        padding: 0,
                        lineHeight: "175%",
                      },
                    }}
                  />
                </StoreRatingStars>
              </StoreRatingContainer>
            </StoreInfoContainer>
            <StoreLeftMenuTitle>{store.storeName} 지도</StoreLeftMenuTitle>
            <BrandMapContainer>
              <StoreDetailMap />
            </BrandMapContainer>
            <StoreLeftMenuTitle>{store.storeName} 메뉴</StoreLeftMenuTitle>
            <BrandMenuContainer>
              <StoreDetailMenu />
            </BrandMenuContainer>
          </StoreDetailLeft>

          <StoreDetailRight>
            <StoreReservationContainer>
              <StoreDetailReservation />
            </StoreReservationContainer>
          </StoreDetailRight>
        </StoreDetailContainer>
      </Container>
    </>
  );
};

export default StoreDetail;
