import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../../api/AxiosApi";
import Modal from "../../components/Modal";

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
  margin-left: 1em;
  background-color: #fff;
  border-radius: 1em;
  padding: 2em;
  box-shadow: 0 0.2em 0.5em 0.2em rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StoreReservationMenuTitle = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
`;

// 시간 버튼 컨테이너
const TimeButtonContainer = styled.div`
  display: flex;
  margin-top: 2%;
  width: 100%;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  justify-content: left;
  row-gap: 1vw;
  column-gap: 2%;
`;

const TimeButton = styled.button`
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

const StoreReservationPersonAndConfirmContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const StoreReservationSubMenuTitle = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: auto;
  font-size: clamp(16px, 1.5vw, 20px);
  font-weight: 600;
  position: relative;
`;

const StoreReservationPersonContainer = styled.div`
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
const PersonButtonContainer = styled.div`
  display: flex;
  margin-top: 7%;
  width: 100%;
  flex-wrap: wrap; /* 버튼이 많을 경우 줄 바꿈 처리 */
  row-gap: 0.8vw; /* 버튼 간격 */
  column-gap: 4%;
  justify-content: left;
`;

// 인원 버튼 스타일
const PersonButton = styled.button`
  width: 22%; /* 기본 5개 배치 */
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

const StoreReservationConfirmContainer = styled.div`
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

const StoreReservationConfirmList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
`;

const StoreReservationConfirmIndex = styled.div`
  box-sizing: border-box;
  width: 100%;
  line-height: 1.5em;
  position: relative;
  font-weight: bold;
`;

const StoreReservationConfirmContents = styled.div`
  box-sizing: border-box;
  width: 100%;
  line-height: 1.5em;
  position: relative;
`;

const StoreReservationConfirmHr = styled.hr`
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.3vh;
  margin-bottom: 0.3vh;
`;

// 예약 버튼 스타일
const SubmitButton = styled.button`
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

const StoreDetailReservation = () => {
  const { storeNo } = useParams();
  const [availableTimes, setAvailableTimes] = useState([]);
  const [reservedTimes, setReservedTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [storeName, setStoreName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

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

  const handleSubmit = async () => {
    if (!selectedTime || !selectedPerson) {
      setModalMessage("시간과 인원을 모두 선택해주세요.");
      setIsModalOpen(true);
      return;
    }
    const reservationData = {
      rTime: selectedTime,
      rPersonCnt: selectedPerson,
      storeNo: Number(storeNo),
      storeName: storeName,
      userId: localStorage.getItem("loggedInUserId"),
    };
    try {
      await AxiosApi.createReservation(reservationData);

      setSelectedTime(null);
      setSelectedPerson(null);

      // 예약 성공 시 모달 메시지 설정
      setModalMessage(
        `<span style="font-size: 1.1em;"><strong style="font-size: 1.1em;">${reservationData.userId}</strong> 님</span><br />${storeName} ${reservationData.rTime}:00 ${reservationData.rPersonCnt}명<br />예약이 성공적으로 완료되었습니다!`
      );
      setIsModalOpen(true); // 모달 열기
    } catch (error) {
      setModalMessage("예약에 실패했습니다.<br />다시 시도해주세요.");
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    window.location.reload(); // 페이지 리로드
  };

  return (
    <StoreReservationContainer>
      <StoreReservationTimeContainer>
        <StoreReservationMenuTitle>예약 시간 선택</StoreReservationMenuTitle>
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
      <StoreReservationPersonAndConfirmContainer>
        <StoreReservationPersonContainer>
          <StoreReservationSubMenuTitle>인원 선택</StoreReservationSubMenuTitle>
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
        <StoreReservationConfirmContainer>
          <StoreReservationSubMenuTitle>
            예약 내용 확인
          </StoreReservationSubMenuTitle>
          <StoreReservationConfirmList>
            <StoreReservationConfirmIndex style={{ marginTop: "2em" }}>
              예약지점
            </StoreReservationConfirmIndex>
            <StoreReservationConfirmContents>
              {storeName}
            </StoreReservationConfirmContents>
            <StoreReservationConfirmHr />
            <StoreReservationConfirmIndex>
              예약시간
            </StoreReservationConfirmIndex>
            <StoreReservationConfirmContents>
              {selectedTime ? `${selectedTime}:00` : ""}
            </StoreReservationConfirmContents>
            <StoreReservationConfirmHr />
            <StoreReservationConfirmIndex>인원수</StoreReservationConfirmIndex>
            <StoreReservationConfirmContents>
              {selectedPerson ? `${selectedPerson}명` : ""}
            </StoreReservationConfirmContents>
            <StoreReservationConfirmHr />
          </StoreReservationConfirmList>
          <SubmitButton className="available" onClick={handleSubmit}>
            예약하기
          </SubmitButton>

          {/* 모달 표시 */}
          <Modal
            isOpen={isModalOpen}
            message={modalMessage}
            onClose={closeModal}
          />
        </StoreReservationConfirmContainer>
      </StoreReservationPersonAndConfirmContainer>
    </StoreReservationContainer>
  );
};

export default StoreDetailReservation;
