import React, { useState } from "react";
import { storage } from "../api/Firebase";
import styled from "styled-components";
import AxiosApi from "../api/AxiosApi";

const DEFAULT_PROFILE_URL =
  "https://firebasestorage.googleapis.com/v0/b/project-mini-db956.firebasestorage.app/o/default_profile.png?alt=media&token=6ccfd06d-4d99-4c7b-b603-1baf0517116b";

const SignupModal = ({ closeModal }) => {
  const [inputPhone, setInputPhone] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const [isId, setIsId] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);

  const [file, setFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState(DEFAULT_PROFILE_URL);

  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("유효한 이미지 파일만 선택해주세요.");
    }
  };

  const onClickSignup = async () => {
    let finalProfileUrl = DEFAULT_PROFILE_URL;

    if (file) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);

      try {
        await fileRef.put(file);
        finalProfileUrl = await fileRef.getDownloadURL();
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        alert("이미지 업로드 중 문제가 발생했습니다.");
        return;
      }
    }

    try {
      const memberReg = await AxiosApi.signup(
        inputName,
        inputId,
        inputPw,
        inputEmail,
        inputPhone,
        finalProfileUrl
      );
      if (memberReg.data) {
        alert("회원가입에 성공했습니다.");
        closeModal();
      } else {
        alert("회원가입에 실패했습니다.");
      }
    } catch (e) {
      alert("서버가 응답하지 않습니다.");
    }
  };

  const memberRegCheck = async (email) => {
    try {
      const resp = await AxiosApi.isEmailExist(email);
      if (resp.data) {
        setMailMessage("사용 가능한 이메일 입니다.");
        setIsMail(true);
      } else {
        setMailMessage("중복된 이메일 입니다.");
        setIsMail(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeMail = (e) => {
    setInputEmail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(e.target.value)) {
      setMailMessage("이메일 형식이 올바르지 않습니다.");
      setIsMail(false);
    } else {
      setMailMessage("올바른 형식 입니다.");
      setIsMail(true);
      memberRegCheck(e.target.value);
    }
  };

  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 ");
      setIsPw(true);
    }
  };

  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀번호가 일치합니다.");
      setIsConPw(true);
    }
  };

  const onChangeId = async (e) => {
    const idValue = e.target.value;
    setInputId(idValue);

    if (idValue.length < 5 || idValue.length > 15) {
      setIdMessage("아이디는 5자 이상 15자 이하로 입력하세요.");
      setIsId(false);
      return;
    }

    try {
      const resp = await AxiosApi.idCheck(idValue);
      if (resp.data === true) {
        setIdMessage("사용 가능한 아이디입니다.");
        setIsId(true);
      } else {
        setIdMessage("중복된 아이디입니다.");
        setIsId(false);
      }
    } catch (error) {
      setIdMessage("아이디 중복 검사에 실패했습니다.");
      setIsId(false);
    }
  };

  const onChangePhone = (e) => {
    const phoneValue = e.target.value;
    setInputPhone(phoneValue);

    const phoneRegex = /^010-\d{4}-\d{4}$/;
    if (!phoneRegex.test(phoneValue)) {
      setPhoneMessage("전화번호 형식이 올바르지 않습니다.");
      setIsPhone(false);
    } else {
      setPhoneMessage("올바른 전화번호입니다.");
      setIsPhone(true);
    }
  };
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onChangeName = (e) => {
    setInputName(e.target.value);
    setIsName(true);
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <h3>회원가입</h3>

        <ProfileWrapper>
          <ProfileImage>
            {profileUrl ? (
              <img src={profileUrl} alt="Profile" />
            ) : (
              <span>이미지 미리보기</span>
            )}
            <FileInputLabel>
              +
              <FileInput
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
              />
            </FileInputLabel>
          </ProfileImage>
        </ProfileWrapper>
        <InputContainer>
          <p>이름</p>
          <Input
            type="text"
            placeholder="이름을 입력해주세요"
            value={inputName}
            onChange={onChangeName}
          />
        </InputContainer>
        <InputContainer>
          <p>아이디</p>
          <Input
            type="text"
            placeholder="아이디입력 (5~15자)"
            value={inputId}
            onChange={onChangeId}
          />
          {idMessage && <Message isValid={isId}>{idMessage}</Message>}
        </InputContainer>
        <InputContainer>
          <p>비밀번호</p>
          <Input
            type="password"
            placeholder="비밀번호 입력(숫자, 영문자, 특수문자 포함 8~25)"
            value={inputPw}
            onChange={onChangePw}
          />
          {pwMessage && <Message isValid={isPw}>{pwMessage}</Message>}
        </InputContainer>
        <InputContainer>
          <p>비밀번호 확인</p>
          <Input
            type="password"
            placeholder="비밀번호 재입력"
            value={inputConPw}
            onChange={onChangeConPw}
          />
          {conPwMessage && <Message isValid={isConPw}>{conPwMessage}</Message>}
        </InputContainer>
        <InputContainer>
          <p>이메일</p>
          <Input
            type="email"
            placeholder="이메일 주소 입력 "
            value={inputEmail}
            onChange={onChangeMail}
          />
          {mailMessage && <Message isValid={isMail}>{mailMessage}</Message>}
        </InputContainer>
        <InputContainer>
          <p>전화번호</p>
          <Input
            type="text"
            placeholder="전화번호 -(하이픈) 포함 13자리 입력"
            value={inputPhone}
            onChange={onChangePhone}
          />
          {phoneMessage && <Message isValid={isPhone}>{phoneMessage}</Message>}
        </InputContainer>


        <ButtonContainer>
          <SignupButton
            disabled={
              !isName || !isId || !isPw || !isConPw || !isMail || !isPhone
            }
            onClick={onClickSignup}
          >
            가입하기
          </SignupButton>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SignupModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh; /* 전체 화면 높이로 설정 */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;
const ModalContainer = styled.div`
  border-radius: 25px;
  z-index: 1000;
  background-color: white;
  padding: 20px;

  width: 600px;
  /* height: 800px; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.div`
  position: relative;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  span {
    display: block;
    text-align: center;
    padding: 20px;
    background-color: #eaeaea;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const FileInputLabel = styled.label`
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 15px;
  font-size: 20px;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileInput = styled.input`
  display: none;
`;

export const InputContainer = styled.div`
  /* width: 65%; */
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 415px;
  padding: 9px;
  margin-bottom: 4px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  outline: none;
  &:focus {
    border-color: black;
  }
`;
const Message = styled.div`
  color: ${(props) => (props.isValid ? "green" : "red")};
  font-size: 11px;
`;

const DateSelector = styled.div`
  width: 420px; /* 전체 길이 설정 */
  display: flex;
  gap: 10px;
  justify-content: center;

  select {
    padding: 10px;
    font-size: 16px;
    border-radius: 20px;
    border: 1px solid #ccc;
  }

  select:first-child {
    flex: 2; /* 첫 번째 요소는 비율 2 */
  }
  select:nth-child(2),
  select:nth-child(3) {
    flex: 1; /* 두 번째와 세 번째 요소는 비율 1 */
  }
`;

const ButtonContainer = styled.div`
  /* margin-top: 20px; */
  display: flex;
  justify-content: center;
`;

const SignupButton = styled.button`
  padding: 15px 30px;
  font-size: 16px;
  color: white;
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "black")};
  border: none;
  border-radius: 20px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: 415px;
  &:hover {
    background-color: ${({ disabled }) => (disabled ? "#ccc" : "#333")};
  }
`;
