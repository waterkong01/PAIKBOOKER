import React, { useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi"; // 로그인 API 호출
import SignupModal from "./SignupModal"; // SignupModal 컴포넌트 임포트
import FindIdModal from "./FindIdByEmail"; // 아이디 찾기 모달 컴포넌트 임포트

// 모달 배경
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

// 모달 콘텐츠
const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  z-index: 10000;
  width: 450px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px; /* Set a fixed height for the modal */
`;

// 입력 필드 스타일
const InputField = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 16px;
`;

// 버튼 스타일
const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #c1c1c1;
  }
`;

// 텍스트 버튼 스타일
const TextButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;  /* Spread the buttons */
  align-items: center;
  width: 100%;
`;

const TextButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 12px;  // Reduced font size
  text-decoration: underline;
  margin-right: 8px;  // Space between 아이디 찾기 and 비밀번호 찾기

  &:hover {
    color: #c1c1c1;
  }
`;

const Slash = styled.span`
  margin-right: 8px;
  color: black;
  font-size: 12px;  // Reduced font size
`;

const SignupTextButton = styled.button`
  background: none;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 12px;  // Reduced font size
  text-decoration: underline;

  &:hover {
    color: #c1c1c1;
  }
`;

// 로그인 모달 컴포넌트
const LoginModal = ({ closeModal, setIsLoggedIn }) => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false); // 회원가입 모달 열기/닫기 상태
  const [isFindIdModalOpen, setIsFindIdModalOpen] = useState(false); // 아이디 찾기 모달 열기/닫기 상태

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const onClickLogin = async () => {
    try {
      const rsp = await AxiosApi.login(inputId, inputPw);
      if (rsp.data) {
        localStorage.setItem("loggedInUserId", inputId);
        setIsLoggedIn(true); // 로그인 성공 후 상태 변경
        alert("로그인 성공");
        closeModal(); // 로그인 성공 후 모달 닫기
      } else {
        setErrorMessage("아이디 또는 패스워드가 틀립니다.");
      }
    } catch (e) {
      setErrorMessage("서버가 응답하지 않습니다.");
    }
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true); // 회원가입 모달 열기
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false); // 회원가입 모달 닫기
  };

  const openFindIdModal = () => {
     // 아이디 찾기 모달 열기
   
    setIsFindIdModalOpen(true);
  };

  const closeFindIdModal = () => {
    setIsFindIdModalOpen(false); // 아이디 찾기 모달 닫기
  };

  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalContent>
        <h2>로그인</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField
            type="text"
            placeholder="아이디"
            value={inputId}
            onChange={(e) => handleInputChange(e, setInputId)}
          />
          <InputField
            type="password"
            placeholder="패스워드"
            value={inputPw}
            onChange={(e) => handleInputChange(e, setInputPw)}
          />
          <Button type="button" onClick={onClickLogin}>
            로그인
          </Button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* 아이디찾기 / 비밀번호 찾기 */}
          <TextButtonContainer>
            <div>
              <TextButton onClick={openFindIdModal}>아이디 찾기</TextButton>
              <Slash>/</Slash>
              <TextButton onClick={() => alert("비밀번호 찾기 기능은 아직 구현되지 않았습니다.")}>비밀번호 찾기</TextButton>
            </div>
            <SignupTextButton onClick={openSignupModal}>회원가입</SignupTextButton>
          </TextButtonContainer>
        </form>
      </ModalContent>

      {/* 회원가입 모달 열기 */}
      {isSignupModalOpen && <SignupModal closeModal={closeSignupModal} />}

      {/* 아이디 찾기 모달 열기 */}
      {isFindIdModalOpen && <FindIdModal closeModal={closeFindIdModal} />}
    </>
  );
};

export default LoginModal;
