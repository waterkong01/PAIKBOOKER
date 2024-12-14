import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";
import MobileBasicModal from "./MobileBasicModal";

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
  width: 60vw;
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

const StoreReservationConfirmContainer = styled.div`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StoreReservationSubMenuTitle = styled.div`
  box-sizing: border-box;
  width: 95%;
  height: auto;
  font-size: 3vw;
  padding: 2vw;
  font-weight: 600;
  position: relative;
  text-align: center;
`;

const StoreReservationConfirmList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 3vw;
  position: relative;
  text-align: left;
`;

const StoreReservationConfirmIndex = styled.div`
  box-sizing: border-box;

  width: 100%;
  position: relative;
  font-size: 3vw;
  font-weight: bold;
  text-align: center;
`;

const StoreReservationConfirmContents = styled.div`
  box-sizing: border-box;
  margin-top: 1vw;
  width: 100%;
  position: relative;
  text-align: center;
`;

const StoreReservationConfirmHr = styled.hr`
  box-sizing: border-box;
  width: 85%;
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

// 예약 버튼 스타일
const SubmitButton = styled.button`
  margin-top: 5vw;
  width: 100%;
  height: 6vw;
  border: none;
  padding: 0.5em;
  border-radius: 5vw;
  font-size: 2vw;
  cursor: pointer;
  background-color: black;
  color: white;
`;

const MobileReservationModal2 = ({ isOpen, onClose, reservationData }) => {
  const modalRef = useRef();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [storeName, setStoreName] = useState("");
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isReservationModal1Open, setIsReservationModal1Open] = useState(true);
  const [isReservationModal2Open, setIsReservationModal2Open] = useState(true);
  const [basicModalMessage, setBasicModalMessage] = useState("");

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

  const handleSubmit = async () => {
    try {
      await AxiosApi.createReservation(reservationData);
      // 예약 성공 시 모달 메시지 설정
      setBasicModalMessage(
        `<span style="font-size: 1.1em;"><strong style="font-size: 1.1em;">${reservationData.userId}</strong> 님</span><br />${reservationData.storeName} ${reservationData.rTime}시 ${reservationData.rPersonCnt}명<br />예약이 성공적으로 완료되었습니다!`
      );
      setIsReservationModal2Open(false); // 모달2 닫기
      setIsBasicModalOpen(true); // 모달 열기

      setSelectedTime(null);
      setSelectedPerson(null);
    } catch (error) {
      setBasicModalMessage("예약에 실패했습니다.<br />다시 시도해주세요.");
      setIsBasicModalOpen(true);
    }
  };

  const closeBasicModal = () => {
    setIsBasicModalOpen(false);
    window.location.reload(); // 페이지 리로드
  };

  const closeModal2 = () => {
    setIsReservationModal2Open(false); // 모달 닫기
    window.location.reload(); // 페이지 리로드
  };

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox ref={modalRef}>
        <StoreReservationContainer>
          <StoreReservationConfirmContainer>
            <StoreReservationSubMenuTitle>
              예약 내용 확인
            </StoreReservationSubMenuTitle>
            <StoreReservationConfirmList>
              <StoreReservationConfirmIndex style={{ marginTop: "2em" }}>
                예약지점
              </StoreReservationConfirmIndex>
              <StoreReservationConfirmContents>
                {reservationData.storeName}
              </StoreReservationConfirmContents>
              <StoreReservationConfirmHr />
              <StoreReservationConfirmIndex>
                예약시간
              </StoreReservationConfirmIndex>
              <StoreReservationConfirmContents>
                {reservationData.rTime ? `${reservationData.rTime}:00` : ""}
              </StoreReservationConfirmContents>
              <StoreReservationConfirmHr />
              <StoreReservationConfirmIndex>
                인원수
              </StoreReservationConfirmIndex>
              <StoreReservationConfirmContents>
                {reservationData.rPersonCnt
                  ? `${reservationData.rPersonCnt}명`
                  : ""}
              </StoreReservationConfirmContents>
            </StoreReservationConfirmList>
            <SubmitButton className="available" onClick={handleSubmit}>
              예약하기
            </SubmitButton>

            {/* 모달 표시 */}
            <MobileBasicModal
              isOpen={isBasicModalOpen}
              message={basicModalMessage}
              onClose={closeBasicModal}
            />
          </StoreReservationConfirmContainer>
        </StoreReservationContainer>
      </ModalBox>
    </Overlay>
  );
};

export default MobileReservationModal2;
