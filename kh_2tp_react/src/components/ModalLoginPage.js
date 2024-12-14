import React from "react";
import styled from "styled-components";

// 모달 오버레이
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

// 모달 컨텐츠
const ModalContent = styled.div`
  position: fixed;
  top: 100px;
  right: 40px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10000;
  width: 231px;
  height: 133px;
  border-radius: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
`;

// 텍스트 링크 스타일링
const ModalTextLink = styled.span`
  font-size: 1rem;
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const ModalLoginPage = ({ isOpen, closeModal, handleModalLinkClick }) => {
  if (!isOpen) return null;

  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalContent>
        <>
          <ModalTextLink onClick={() => handleModalLinkClick("signup")}>
            회원가입
          </ModalTextLink>
          <ModalTextLink onClick={() => handleModalLinkClick("login")}>
            로그인
          </ModalTextLink>
        </>
      </ModalContent>
    </>
  );
};

export default ModalLoginPage;
