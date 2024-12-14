import styled from "styled-components";

export const Container = styled.div`
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
    margin: 0;
    padding: 0;
  }
`;

export const StoreDetailContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin-top: 1%;
  display: flex;
  align-items: flex-start;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
`;

export const StoreDetailLeft = styled.div`
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
    margin: 0;
    align-items: center;
  }
`;

export const StoreDetailTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  height: 4%;
  margin-bottom: 1%;
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 600;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10%;
    justify-content: center;
    order: 2;
  }
`;

export const BrandImgContainer = styled.div`
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
    margin: 0;
    border-radius: 0;
    order: 1;
  }
`;

export const BrandImage = styled.img`
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

export const StoreInfoContainer = styled.div`
  box-sizing: border-box;
  margin-top: 1%;
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 1%;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    order: 3;
  }
`;

export const StoreAddrAndPhoneContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 70%;
  display: flex;
  align-content: left;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const StoreAddr = styled.div`
  box-sizing: border-box;
  font-size: clamp(16px, 1.5vw, 20px);
  text-align: left;
  margin-top: 1%;
`;

export const StoreHourContainer = styled.div`
  box-sizing: border-box;
  font-size: clamp(14px, 1.3vw, 17px);
  text-align: left;
  margin-top: 0.8%;
`;

export const StorePhoneContainer = styled.div`
  box-sizing: border-box;
  margin-top: 4%;
  display: flex;
  gap: 1.5%;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const StorePhone = styled.div`
  box-sizing: border-box;
  font-size: clamp(16px, 1.5vw, 20px);
  text-align: left;
  position: relative;
`;

export const StorePhoneImg = styled.div`
  box-sizing: border-box;
  display: flex;
  padding-top: 5px;
  transform: scale(1.2);
  position: relative;
`;

export const StoreRatingContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 29%;
  display: flex;
  align-content: left;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

export const StoreRatingText = styled.div`
  box-sizing: border-box;
  width: 45%;
  font-size: clamp(13px, 1.2vw, 15px);
  position: relative;
  line-height: 170%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StoreRatingStars = styled.div`
  box-sizing: border-box;
  width: 55%;
  position: relative;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const StoreLeftMapTitle = styled.div`
  box-sizing: border-box;
  margin-top: 10%;
  width: 100%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandMapContainer = styled.div`
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
  @media (max-width: 768px) {
    margin-top: 10%;
    width: 100%;
    max-width: 768px;
    border-radius: 0;
    order: 5;
  }
`;

export const StoreLeftMenuTitle = styled.div`
  box-sizing: border-box;
  margin-top: 10%;
  width: 100%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BrandMenuContainer = styled.div`
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuArrowButton = styled.button`
  position: absolute;
  text-align: center;
  width: 5%;
  height: 15vw;
  background-color: #e3e3e3;
  color: black;
  border: none;
  cursor: pointer;
  z-index: 5;
  padding: 1%;
  font-size: clamp(10px, 1vw, 12px);
  border-radius: 0.7em;
  &.left-arrow {
    left: 0;
  }
  &.right-arrow {
    right: 0;
  }
`;

export const MenuImageContainer = styled.div`
  width: auto;
  height: 30vw;
  margin: 0 7%;
  display: flex;
  align-items: top;
  gap: 2%;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;
`;

export const StoreDetailRight = styled.div`
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
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StoreReservationTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  margin-left: 1em;
  height: 4%;
  margin-bottom: 1%;
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 600;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 1%;
    align-items: center;
    order: 3;
  }
`;

export const StoreReservationContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 640px;
  margin-top: 1%;
  position: relative;
`;

export const StoreReservationTimeContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  margin-left: 1em;
  background-color: #fff;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.2em 0.5em 0.2em rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StoreReservationMenuTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
`;

// 시간 버튼 컨테이너
export const TimeButtonContainer = styled.div`
  display: flex;
  margin-top: 2%;
  width: 100%;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  justify-content: left;
  row-gap: 1vw;
  column-gap: 2%;
`;

export const TimeButton = styled.button`
  width: 23.5%;
  aspect-ratio: 3; /* 3:1 비율 */
  border: none;
  border-radius: 2em;
  font-size: clamp(12px, 1.2vw, 15px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.available {
    background-color: white;
    border: 1px solid black;
    color: black;
    &:hover {
      background-color: black;
      color: white;
      border: 1px solid black;
    }
  }
  &.reserved {
    background-color: #d8d8d8;
    color: white;
    cursor: not-allowed;
  }
  &.selected {
    background-color: black;
    color: white;
  }
`;

export const StoreReservationPersonAndConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const StoreReservationSubMenuTitle = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
`;

export const StoreReservationPersonContainer = styled.div`
  box-sizing: border-box;
  width: 45%;
  margin-left: 1.5em;
  background-color: white;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.2em 0.5em 0.2em rgba(0, 0, 0, 0.15);
  margin-right: 1em;
  justify-content: center;
  align-items: center;
`;

// 인원 버튼 컨테이너
export const PersonButtonContainer = styled.div`
  display: flex;
  margin-top: 7%;
  width: 100%;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  row-gap: 0.8vw; /* 버튼 간격 */
  column-gap: 4%;
  justify-content: left;
`;

// 인원 버튼 스타일
export const PersonButton = styled.button`
  width: 16.8%; /* 기본 5개 배치 */
  aspect-ratio: 1; /* 1:1 비율 */
  border: 1px solid black;
  border-radius: 2em;
  font-size: 0.9vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  color: black;
  &:hover {
      background-color: black;
      color:white;
    }
  &.selected {
    background-color: black;
    color: white;
  }
`;

export const StoreReservationConfirmContainer = styled.div`
  box-sizing: border-box;
  width: 45%;
  margin-right: 1em;
  background-color: white;
  border-radius: 1.5em;
  padding: 2em;
  box-shadow: 0 0.2em 0.5em 0.2em rgba(0, 0, 0, 0.15);
  margin-left: 1em;
  justify-content: center;
  align-items: center;
`;

export const StoreReservationConfirmList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

export const StoreReservationConfirmIndex = styled.div`
  box-sizing: border-box;
  width: 100%;
  line-height: 1.5em;
  position: relative;
  font-weight: bold;
`;

export const StoreReservationConfirmContents = styled.div`
  box-sizing: border-box;
  width: 100%;
  line-height: 1.5em;
  position: relative;
`;

export const StoreReservationConfirmHr = styled.hr`
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.3vh;
  margin-bottom: 0.3vh;
`;

// 예약 버튼 스타일
export const SubmitButton = styled.button`
  margin-top: 1em;
  width: 100%;
  height: auto;
  border: none;
  padding: 0.5em;
  border-radius: 1em;
  font-size: 1em;
  cursor: pointer;
  background-color: black;
  color: white;
`;

export const MobileReservationButton = styled.button`
  width: 100%;
  height: 10vh;
  padding: 1em;
  background-color: black;
  color: white;
  font-size: clamp(20px, 2vw, 24px);
  font-weight: 600;
  position: fixed;
  bottom: 0;
  cursor: pointer;
  z-index: 1000;
  @media (min-width: 769px) {
    display: none;
  }
`;

