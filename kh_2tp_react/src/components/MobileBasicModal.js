import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

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

const ModalMessage = styled.div`
  font-size: 2vw;
`;
// 닫기 버튼 스타일
const CloseButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 30px;
  padding: 8px 16px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 0.8em;

  &:hover {
    background-color: black;
  }
`;
const MobileBasicModal = ({ isOpen, onClose, message }) => {
  const modalRef = useRef();

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

  if (!isOpen) return null;

  return (
    <Overlay>
      <ModalBox ref={modalRef}>
        <ModalMessage dangerouslySetInnerHTML={{ __html: message }} />
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </ModalBox>
    </Overlay>
  );
};

export default MobileBasicModal;
