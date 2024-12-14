import React, { useState } from "react";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi"; // Assume you have a function for API requests

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
  height: 250px; /* Set a fixed height for the modal */
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
    background-color: #45a049;
  }
`;

// 텍스트 스타일
const MessageText = styled.p`
  color: ${(props) => (props.error ? "red" : "black")};
  margin-top: 10px;
`;

// 이메일을 입력 받아 아이디를 찾는 모달 컴포넌트
const FindIdByEmail = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

/*   const handleInputChange = (e) => {
    setEmail(e.target.value);
  }; */
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    console.log("현재 입력된 이메일:", inputValue); // 입력 값을 콘솔에 출력
  };

  const handleFindId = async () => {
    if (!email) {
      setErrorMessage("이메일을 입력해주세요.");
      return;
    }

    try {
      // 이메일을 서버로 보내서 아이디를 찾는 API 호출
      const response = await AxiosApi.findIdByEmail(email);
      console.log("서버 응답 데이터:", response.data);

      if (response.data.success) {
        // 아이디가 존재하면
        console.log("아이디 찾기 성공, 유저 아이디:", response.data.userId);
        setMessage(`아이디: ${response.data.userId}`);
        setErrorMessage(""); // Clear error message if successful
      } else {
        // 아이디를 찾을 수 없는 경우
        console.log("아이디 찾기 실패:", response.data);
        setErrorMessage("입력하신 이메일에 해당하는 아이디가 없습니다.");
        setMessage(""); // Clear success message if error occurs
      }
    } catch (error) {
        console.error("API 호출 오류:", error); // API 에러 확인
        setErrorMessage("서버에서 오류가 발생했습니다.");
        setMessage(""); // Clear success message if error occurs
    }
  };

  return (
    <>
      <ModalOverlay onClick={closeModal} />
      <ModalContent>
        <h2>아이디 찾기</h2>
        <InputField
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={handleInputChange}
        />
        <Button onClick={handleFindId}>아이디 찾기</Button>
        {message && <MessageText>{message}</MessageText>}
        {errorMessage && <MessageText error>{errorMessage}</MessageText>}
      </ModalContent>
    </>
  );
};

export default FindIdByEmail;
