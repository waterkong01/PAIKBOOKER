import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import { useParams } from "react-router-dom";
import MobileBasicModal from "./PcBasicModal";
import MobileReservationModal2 from "./MobileReservationModal2";

// 오버레이 스타일
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

// 모달 박스 스타일
const ModalBox = styled.div`
  background: white;
  width: 70vw;
  padding: 2vw;
  border-radius: 5vw;
  box-shadow: 0 0.2em 0.5em 0.2em rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const StoreReservationContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoreReservationTimeContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoreReservationMenuTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  font-size: 4vw;
  font-weight: 600;
  position: relative;
  padding: 2vw;
  text-align: left;
  justify-content: center;
  align-items: center;
`;

// 시간 버튼 컨테이너
const TimeButtonContainer = styled.div`
  display: flex;
  margin-top: 1vw;
  width: 100%;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  justify-content: left;
  row-gap: 1vw;
  column-gap: 2vw;
`;

const TimeButton = styled.button`
  width: 19.5vw;
  aspect-ratio: 2.5; /* 3:1 비율 */
  border: none;
  border-radius: 5vw;
  font-size: 3vw;
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

const StoreReservationSubMenuTitle = styled.div`
  width: 95%;
  height: auto;
  font-size: 4vw;
  font-weight: 600;
  position: relative;
  padding: 2vw;
  text-align: center;
`;

const StoreReservationPersonContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: white;
  justify-content: left;
  align-items: center;
  margin-top: 4vw;
`;

// 인원 버튼 컨테이너
const PersonButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2vw;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  row-gap: 2.8vw; /* 버튼 간격 */
  column-gap: 2.8vw;
  justify-content: center;
`;

// 인원 버튼 스타일
const PersonButton = styled.button`
  width: 10vw;
  aspect-ratio: 1; /* 1:1 비율 */
  border: 1px solid black;
  border-radius: 10em;
  font-size: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
  &.selected {
    background-color: black;
    color: white;
  }
`;

const SubmitButton = styled.button`
  margin-top: 5vw;
  width: 100%;
  height: 10vw;
  border: none;
  padding: 0.5em;
  border-radius: 5vw;
  font-size: 3vw;
  background-color: ${(props) => (props.disabled ? "#d8d8d8" : "black")};
  color: ${(props) => (props.disabled ? "#aaa" : "white")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const MobileReservationModal1 = ({ isOpen, onClose }) => {
  const modalRef = useRef();
  const { storeNo } = useParams();
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [storeName, setStoreName] = useState("");
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isModal1Open, setIsModal1Open] = useState(true);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [basicModalMessage, setBasicModalMessage] = useState("");

  // 스토어 이름 조회 (alert용)
  useEffect(() => {
    const getStoreName = async () => {
      try {
        const response = await AxiosApi.getEachStore(storeNo);
        setStoreName(response.storeName);
      } catch (error) {
        console.error("매장 이름 조회 오류 : ", error);
      }
    };
    getStoreName();
  }, [storeNo]);

  // 예약 가능 및 예약 불가능 시간 조회
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

  // 모달 외부를 클릭했을 때 모달을 닫는 함수
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose(); // 외부 클릭 시 모달 닫기
      }
    };

    if (isOpen) {
      // 모달이 열려있을 때만 이벤트 리스너 추가
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      // 모달이 닫히면 이벤트 리스너 제거
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // 정리
    };
  }, [isOpen, onClose]);

  // 현재 시간 이후의 시간만 표시
  const filterTimes = (times) => {
    const currentHour = new Date().getHours(); // 현재 시간 (24시간 형식)
    return times.filter((time) => Number(time) > currentHour);
  };

  const filteredAvailableTimes = filterTimes(availableTimes);
  const filteredReservedTimes = filterTimes(reservedTimes);

  const combinedTimes = [...reservedTimes, ...availableTimes].sort(
    (a, b) => a - b
  );

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handlePersonSelect = (person) => {
    setSelectedPerson(person);
  };

  const reservationData = {
    rTime: selectedTime,
    rPersonCnt: selectedPerson,
    storeNo: Number(storeNo),
    storeName: storeName,
    userId: localStorage.getItem("loggedInUserId"),
  };

  const nextButton = async () => {
    try {
      setIsModal1Open(false); // 모달1 닫기
      setIsModal2Open(true);
    } catch (error) {
      setBasicModalMessage("예약에 실패했습니다.<br />다시 시도해주세요.");
      setIsBasicModalOpen(true);
      setIsModal1Open(false);
    }
  };

  const closeBasicModal = () => {
    setIsBasicModalOpen(false);
    window.location.reload(); // 페이지 리로드
  };

  const closeModal1 = () => {
    setIsModal1Open(false); // 모달 닫기
    window.location.reload(); // 페이지 리로드
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox ref={modalRef}>
        <StoreReservationContainer>
          <StoreReservationTimeContainer>
            <StoreReservationMenuTitle>
              예약 시간 선택
            </StoreReservationMenuTitle>
            <TimeButtonContainer>
              {combinedTimes.map((time, index) => {
                const isReserved = filteredReservedTimes.includes(time);
                const isAvailable = filteredAvailableTimes.includes(time);

                return isReserved ? (
                  <TimeButton
                    key={`${time}-${index}`}
                    className="reserved"
                    disabled
                  >
                    {time}:00
                  </TimeButton>
                ) : isAvailable ? (
                  <TimeButton
                    key={`${time}-${index}`}
                    className={`available ${
                      selectedTime === time ? "selected" : ""
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}:00
                  </TimeButton>
                ) : null;
              })}
            </TimeButtonContainer>
          </StoreReservationTimeContainer>
          <StoreReservationPersonContainer>
            <StoreReservationSubMenuTitle>
              인원 선택
            </StoreReservationSubMenuTitle>
            <PersonButtonContainer>
              {Array.from({ length: 15 }, (_, i) => i + 1).map((person) => (
                <PersonButton
                  key={person}
                  className={`available ${
                    selectedPerson === person ? "selected" : ""
                  }`}
                  onClick={() => handlePersonSelect(person)}
                >
                  {person}명
                </PersonButton>
              ))}
            </PersonButtonContainer>
          </StoreReservationPersonContainer>

          <SubmitButton
            className="available"
            onClick={nextButton}
            disabled={!selectedTime || !selectedPerson}
          >
            다음으로
          </SubmitButton>

          {isModal2Open && (
            <MobileReservationModal2
              isOpen={isModal2Open}
              onClose={closeModal1}
              reservationData={reservationData}
            />
          )}
        </StoreReservationContainer>
      </ModalBox>
    </Overlay>
  );
};

export default MobileReservationModal1;
