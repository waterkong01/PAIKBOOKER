import styled from "styled-components";
import { useState, useMemo, useRef } from "react";
import { Link } from "react-router-dom";

// 두 위도-경도 좌표 간의 거리를 계산하는 Haversine 공식
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  // 각도를 라디안으로 변환하는 함수
  const toRad = (value) => (value * Math.PI) / 180;

  const R = 6371; // 지구의 반지름 (단위: 킬로미터)

  // 위도와 경도의 차이를 라디안으로 변환
  const deltaLat = toRad(lat2 - lat1); // 위도의 차이
  const deltaLon = toRad(lon2 - lon1); // 경도의 차이

  // Haversine 공식에서 사용되는 값 계산
  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) + // 위도 차이에 대한 함수
    Math.cos(toRad(lat1)) * // 첫 번째 좌표의 위도에 대한 함수
      Math.cos(toRad(lat2)) * // 두 번째 좌표의 위도에 대한 함수
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2); // 경도 차이에 대한 함수

  // 두 점 간의 중앙각을 계산
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // 거리를 계산하여 반환 (단위: 킬로미터)
  return R * c;
};

const MobileHomeItemBlock = styled.div`
  width: 100%;
  margin: 0 auto; /* 화면 중앙 정렬 */
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  overflow-x: hidden;
`;

const DropdownContainer = styled.div`
  width: 100%;
  max-width: 768px;
  height: 30px;
  display: flex;
  justify-content: right;
  margin-right: 20px;
  position: relative;
`;

const Dropdown = styled.select`
  height: 30px; /* 드롭다운의 고정 높이 */
  padding-left: 1vw;
  font-size: (13px, 1.2vw, 15px);
  border: none;
  border-bottom: 1px solid black;
  margin-right: 1vw;
  margin-bottom: 1vw;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  width: 20vw;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 1vw center;
  &:focus {
    outline: none;
  }
  & option {
    padding: 10px;
    background-color: black;
    color: white;
  }
  & option:checked {
    background-color: black;
    color: white;
  }
`;

const Background = styled.div`
  width: 100%;
  max-width: 768px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  scroll-behavior: smooth;
`;

const BrandContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column; // 세로로 나열되도록 변경
  align-items: left;
  justify-content: center;
  gap: 5vw;
  position: relative;
`;

const BrandMain = styled.div`
  width: 90%;
  box-sizing: border-box;
  margin-top: 1vw;
  margin-bottom: 1vw;
  box-sizing: border-box;
  background-color: none;
  border-radius: 1em;
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
`;

const NameBar = styled.div`
box-sizing: border-box;
  width: 100%;
  left: 1vw;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const BrandFontBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BrandName = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1vw;
  font-size: clamp(13px, 1.2vw, 15px);
  font-weight: bold; // 브랜드 이름 강조
  color: black;
  background-color: none; // 배경색 추가 (로고가 없을 때 대비용)
`;

const BrandDesc = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 1vw;
  font-size: clamp(13px, 1.2vw, 15px);
  color: #a1a1a1;
  display: flex;
  justify-items: start;
`;

const ArrowsAndStores = styled.div`
  width: 768px;
  display: flex;
  display: relative;
`;

const StoresContainer = styled.div`
  box-sizing: border-box;
  width: 87vw;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
  display: flex;
  align-items: center;
  gap: 1vw;
  padding-right: 1vw;
  padding-left: 1vw;
`;

const ArrowButton = styled.button`
  position: sticky;
  width: 4vw;
  height: 160px;
  background-color: #f1f1f1;
  color: black;
  border: none;
  cursor: pointer;
  z-index: 10;
  font-size: 1em;
  border-radius: 1em;
  &.left-arrow {
    left: 0;
  }
  &.right-arrow {
    right: 0;
  }
`;

const Stores = styled.div`
  box-sizing: border-box;
  display: flex;
  white-space: nowrap;
  scroll-behavior: smooth;
  overflow-x: hidden;
  position: sticky;
  gap: 1vw;
`;

const EachStore = styled.div`
  box-sizing: border-box;
  width: 195px;
  height: 160px;
  border-radius: 1em;
  background-color: #f1f1f1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const EachImage = styled.div`
  box-sizing: border-box;
  width: 195px;
  height: 140px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
`;

const EachTextContainer = styled.div`
  box-sizing: border-box;
  padding-left: 1.5vw;
  padding-bottom: 0.5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const EachText1 = styled.div`
  box-sizing: border-box;
  width: 175px;
  padding-top: 0.5vw;
  font-size: clamp(13px, 1.2vw, 15px);
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
  white-space: no;
  overflow: hidden;
`;

const EachText2 = styled.div`
  box-sizing: border-box;
  font-size: clamp(13px, 1.2vw, 15px);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  transition: color 0.3s;
`;

const MobileHome = ({ mobileDataReceivedAfterSearch }) => {
  const [sortType, setSortType] = useState("name");
  const [sortByDistance, setSortByDistance] = useState(false);
  const containerRefs = useRef([]);
  // console.log("MobileHome why:",mobileDataReceivedAfterSearch); // 데이터 확인

  // console.log("sortByDistance:", sortByDistance);
  // console.log("sortType:", sortType);
  // 브랜드 이름과 설명을 매핑한 배열
  const brandDescriptions = [
    { brandName: "빽보이피자", description: "TRUST ME, THIS IS THE BEST!" },
    { brandName: "역전우동", description: "백종원의 우동&덮밥 전문점" },
    { brandName: "빽다방", description: "합리적인 커피 문화를 만들어 갑니다." },
    { brandName: "홍콩반점", description: "대한민국 No.1 중식 브랜드" },
    { brandName: "롤링파스타", description: "이탈리안 파스타의 캐주얼한 해석" },
    { brandName: "한신포차", description: "대한민국 실내 포장마차" },
    { brandName: "백스비어", description: "Delicious Food&Beer" },
    { brandName: "새마을식당", description: "백종원의 열탄불고기 전문점점" },
    {
      brandName: "제순식당",
      description: "소박하지만 돌아서면 생각나는 따뜻한 맛",
    },
    { brandName: "리춘시장", description: "대한민국 No.1 중식 주점점 브랜드" },
    { brandName: "고투웍", description: "아메리칸 차이니즈 푸드" },
    {
      brandName: "홍콩분식",
      description: "홍콩반점의 노하우를 담은 떡볶이 브랜드",
    },
    {
      brandName: "백종원의쌈밥",
      description: "20여가지 신선한 채소로 즐기는 건강한 한 상!",
    },
    {
      brandName: "본가",
      description: "한식의 세계화에 앞장 서는 우삼겹의 원조",
    },
    {
      brandName: "인생설렁탕",
      description: "인생에 기억될 맛, 인생을 추억할 맛",
    },
    { brandName: "막이오름", description: "우리술의 새로운 막이 오르다" },
    {
      brandName: "연돈볼카츠",
      description: "제주 연돈의 노하우와 우리 돼지 한돈의 꽉 찬 만남",
    },
    { brandName: "돌배기집", description: "백종원의 차돌박이 전문점점" },
    {
      brandName: "미정국수",
      description: "오랜시간 정성으로 만들어낸 한 그릇의 국수",
    },
    {
      brandName: "백철판판",
      description: "여러가지 식재료로 만드는 다양한 철판요리",
    },
  ];

  const setRef = (index) => (element) => {
    containerRefs.current[index] = element; // 해당 인덱스에 DOM 요소 할당
  };

  const referenceLat = 37.500666760224306;
  const referenceLon = 127.03646889929213;

  // 배열이 비어 있지 않으면: 데이터를 reduce를 통해 브랜드별로 그룹화하여 새로운 배열을 생성
  const stores = useMemo(() => {
    const data = Array.isArray(mobileDataReceivedAfterSearch.data)
      ? mobileDataReceivedAfterSearch.data
      : mobileDataReceivedAfterSearch;

    console.log("Data received:", data);

    return data && data.length > 0
      ? data.reduce((acc, curr) => {
          const brandName = curr.brandVO?.brandName; // brandVO가 null이 아닌지 확인
          if (!brandName) return acc; // brandName이 없는 경우 제외

          const brand = acc.find((item) => item.brand.brandName === brandName);

          if (brand) {
            brand.stores.push(curr);
          } else {
            acc.push({
              brand: curr.brandVO,
              stores: [curr],
            });
          }
          return acc;
        }, [])
      : [];
  }, [mobileDataReceivedAfterSearch]);

  console.log("stores:", stores);

  const sortedStores = useMemo(() => {
    return stores.map((brandData) => {
      let sortedStores = [...brandData.stores];

      if (sortByDistance) {
        sortedStores.sort((a, b) => {
          const distanceA = calculateDistance(
            referenceLat,
            referenceLon,
            a.storeLat,
            a.storeLon
          );
          const distanceB = calculateDistance(
            referenceLat,
            referenceLon,
            b.storeLat,
            b.storeLon
          );
          return distanceA - distanceB;
        });
      } else if (sortType === "name") {
        sortedStores.sort((a, b) => a.storeName.localeCompare(b.storeName));
      } else if (sortType === "rating") {
        sortedStores.sort(
          (a, b) => b.avgRatingVO.averageRating - a.avgRatingVO.averageRating
        );
      }

      return { ...brandData, stores: sortedStores };
    });
  }, [stores, sortType, sortByDistance]);

  if (!sortedStores || sortedStores.length === 0) {
    return <div>No stores available</div>;
  }

  const scrollLeft = (index) => {
    const ref = containerRefs.current[index];
    if (ref) {
      ref.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (index) => {
    const ref = containerRefs.current[index];
    if (ref) {
      ref.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "distance") {
      setSortType(null);
      setSortByDistance((prev) => !prev);
    } else {
      setSortType(value);
      setSortByDistance(false);
    }
  };

  // 해당 브랜드 이름에 맞는 설명을 찾는 함수
  const getBrandDescription = (brandName) => {
    const brand = brandDescriptions.find(
      (item) => item.brandName === brandName
    );
    return brand ? brand.description : "설명 없음"; // 기본값은 '설명 없음'
  };

  return (
    <>
      <MobileHomeItemBlock>
        <DropdownContainer>
          <Dropdown onChange={handleSortChange}>
            <option value="" hidden>
              정렬 방식 선택
            </option>
            <option value="name">자음순</option>
            <option value="rating">별점순</option>
            <option value="distance">거리순</option>
          </Dropdown>
        </DropdownContainer>
        <Background>
          <BrandContainer>
            {sortedStores.map((brandData, index) => (
              <div key={brandData.brand.brandName}>
                <StyledLink
                  to={`/brand/${brandData.brand.brandNo}`}
                  key={brandData.brand.brandNo}
                >
                  <BrandMain>
                    <NameBar>
                      <div
                        style={{
                          backgroundColor: "black",
                          width: "5px",
                          height: "38px",
                        }}
                      ></div>
                      <BrandFontBox>
                        <BrandName>
                          {brandData.brand.brandName} {/* 브랜드 이름 표시 */}
                        </BrandName>
                        <BrandDesc>
                          {getBrandDescription(brandData.brand.brandName)}{" "}
                          {/* 브랜드 설명 표시 */}
                        </BrandDesc>
                      </BrandFontBox>
                    </NameBar>
                  </BrandMain>
                </StyledLink>
                <ArrowsAndStores>
                  <ArrowButton
                    className="left-arrow"
                    onClick={() => scrollLeft(index)}
                  >
                    &lt;
                  </ArrowButton>
                  <StoresContainer>
                    <Stores ref={setRef(index)}>
                      {brandData.stores.map((store) => (
                        <StyledLink
                          to={`/stores/${store.storeNo}`}
                          key={store.storeNo}
                        >
                          <EachStore>
                            <EachImage
                              style={{
                                backgroundImage: `url(${brandData.brand.brandImg1})`,
                              }}
                            ></EachImage>
                            <EachTextContainer>
                              <EachText1>{store.storeName}</EachText1>
                              <EachText2>
                                <p style={{ color: "RED", display: "inline" }}>
                                  ★{" "}
                                </p>
                                <p style={{ display: "inline" }}>
                                  {store.avgRatingVO.averageRating}
                                </p>
                                <p
                                  style={{
                                    color: "#a4a4a4",
                                    display: "inline",
                                    marginLeft: "5px",
                                  }}
                                >
                                  {store.brandVO.brandFood}ㆍ{store.storeAddr}
                                </p>
                              </EachText2>
                            </EachTextContainer>
                          </EachStore>
                        </StyledLink>
                      ))}
                    </Stores>
                  </StoresContainer>
                  <ArrowButton
                    className="right-arrow"
                    onClick={() => scrollRight(index)}
                  >
                    &gt;
                  </ArrowButton>
                </ArrowsAndStores>
              </div>
            ))}
          </BrandContainer>
        </Background>
      </MobileHomeItemBlock>
    </>
  );
};

export default MobileHome;
