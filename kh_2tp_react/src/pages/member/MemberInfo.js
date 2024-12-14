// EditProfile.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Input from "../../components/InputComponent";
import Button from "../../components/ButtonComponent";
import { Container, Items } from "../../components/SignupComponent";
import AxiosApi from "../../api/AxiosApi";
import { storage } from "../../api/Firebase";
import styled from "styled-components";
import NavBarModal from "../../components/NavBarModal";
import { InputContainer } from "../../components/SignupModal";
import { DateSelector, SelectBox } from "../../components/SignupModal";

const DEFAULT_PROFILE_URL =
  "https://firebasestorage.googleapis.com/v0/b/project-mini-db956.firebasestorage.app/o/default_profile.png?alt=media&token=6ccfd06d-4d99-4c7b-b603-1baf0517116b";

const MemberInfo = () => {
  const navigate = useNavigate();

  // State for user data
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userName: "",
    userMail: "",
    userPhone: "",
    userBirth: "",
    userImg: DEFAULT_PROFILE_URL,
    userPw: "",
  });

  // Editable fields
  const [inputName, setInputName] = useState("");
  const [inputMail, setInputMail] = useState("");
  // const [inputPw, setInputPw] = useState("");
  const [inputBirth, setInputBirth] = useState("");

  // Validations
  const [mailMessage, setMailMessage] = useState("");
  // const [pwMessage, setPwMessage] = useState("");
  const [isMail, setIsMail] = useState(true);
  // const [isPw, setIsPw] = useState(true);
  const [isName, setIsName] = useState(false);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 100; // 14년 전까지 가능
  const maxYear = currentYear - 14; // 14년 전까지 가능
  const years = [];

  for (let year = currentYear - 1; year >= minYear; year--) {
    if (year <= maxYear) {
      years.push(year);
    }
  }

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Profile image
  const [file, setFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState(DEFAULT_PROFILE_URL);

  // Modal state for password change
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState(""); // For password verification
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [passwordMessage, setPasswordMessage] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userId = localStorage.getItem("loggedInUserId");
      try {
        const response = await AxiosApi.getMemberInfo(userId);
        const userData = response.data;

        if (userData) {
          setUserInfo(userData);
          setInputName(userData.userName);
          setInputMail(userData.userMail);
          setInputBirth(
            userData.userBirth ? userData.userBirth.substring(0, 10) : ""
          );
          const birthParts = userData.userBirth.split('-');
          setSelectedYear(birthParts[0]);
          setSelectedMonth(birthParts[1]);
          setSelectedDay(birthParts[2]);
          setProfileUrl(userData.userImg || DEFAULT_PROFILE_URL);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserInfo();
  }, []);

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

  const handleBirthChange = (type, value) => {
    if (type === 'selectedYear') {
      setSelectedYear(value);
    } else if (type === 'selectedMonth') {
      setSelectedMonth(value);
    } else if (type === 'selectedDay') {
      setSelectedDay(value);
    }
  };

  const onChangeMail = (e) => {
    setInputMail(e.target.value);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(e.target.value)) {
      setMailMessage("이메일 형식이 올바르지 않습니다.");
      setIsMail(false);
    } else {
      setMailMessage("올바른 형식입니다.");
      setIsMail(true);
    }
  };

/*   const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호입니다.");
      setIsPw(true);
    }
  }; */

  const onClickSaveChanges = async () => {
    let finalProfileUrl = profileUrl;

    if (file) {
      try {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        finalProfileUrl = await fileRef.getDownloadURL();
      } catch (error) {
        console.error("이미지 업로드 실패:", error);
        alert("이미지 업로드 중 문제가 발생했습니다.");
        return;
      }
    }

    // 변경된 필드만 추출
    /* const updatedFields = {};
    if (userInfo.USER_NAME !== inputName) updatedFields.USER_NAME = inputName;
    if (userInfo.USER_MAIL !== inputMail) updatedFields.USER_MAIL = inputMail;
    if (inputPw) updatedFields.USER_PW = inputPw;
    if (userInfo.USER_BIRTH.substring(0, 10) !== inputBirth)
      updatedFields.USER_BIRTH = inputBirth;
    if (userInfo.USER_IMG !== finalProfileUrl)
      updatedFields.USER_IMG = finalProfileUrl;

    if (Object.keys(updatedFields).length === 0) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    try {
      const response = await AxiosApi.updateMemberInfo(
        userInfo.userId,
        updatedFields
      );

      if (response.data) {
        alert("회원 정보가 성공적으로 수정되었습니다.");
        navigate("/Member");
      } else {
        alert("회원 정보 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("서버 응답 실패:", error);
      alert("서버가 응답하지 않습니다.");
    } */

    // 변경된 필드만 추출
    const updatedFields = {};
  
    if (userInfo.userName !== inputName) updatedFields.USER_NAME = inputName;
    if (userInfo.userMail !== inputMail) updatedFields.USER_MAIL = inputMail;
    if (userInfo.userPw) updatedFields.USER_PW = userInfo.userPw; // 이미 변경된 비밀번호를 포함
    if (userInfo.userBirth !== inputBirth) updatedFields.USER_BIRTH = inputBirth;
    if (userInfo.userImg !== finalProfileUrl) updatedFields.USER_IMG = finalProfileUrl;
  
    if (Object.keys(updatedFields).length === 0) {
      alert("변경된 내용이 없습니다.");
      return;
    }
  
    try {
      const response = await AxiosApi.updateMemberInfo(userInfo.userId, updatedFields);
      if (response.data) {
        alert("회원 정보가 성공적으로 수정되었습니다.");
        navigate("/Member");
      } else {
        alert("회원 정보 수정에 실패했습니다.");
      }
    } catch (error) {
      console.error("서버 응답 실패:", error);
      alert("서버가 응답하지 않습니다.");
    }
  };

  const handlePasswordChange = () => {
/*     if (currentPassword === userInfo.userPw) {
      if (newPassword === confirmNewPassword) {
        setPasswordMessage("비밀번호가 수정되었습니다.");
        setIsPasswordMatch(true);
        localStorage.setItem("loggedInUserPassword", newPassword);
        setUserInfo({ ...userInfo, userPw: newPassword });
        setShowPasswordModal(false);
      } else {
        setPasswordMessage("비밀번호 확인이 일치하지 않습니다.");
        setIsPasswordMatch(false);
      }
    } else {
      setPasswordMessage("현재 비밀번호가 잘못되었습니다.");
      setIsPasswordMatch(false);
    } */
    if (currentPassword === userInfo.userPw) {
      if (newPassword === confirmNewPassword) {
        setPasswordMessage("비밀번호가 수정되었습니다.");
        setIsPasswordMatch(true);
  
        // userInfo 객체의 비밀번호를 새 비밀번호로 업데이트
        setUserInfo((prevState) => ({
          ...prevState,
          userPw: newPassword,
        }));
  
        // 비밀번호 변경 모달 닫기
        setShowPasswordModal(false);
      } else {
        setPasswordMessage("새 비밀번호 확인이 일치하지 않습니다.");
        setIsPasswordMatch(false);
      }
    } else {
      setPasswordMessage("현재 비밀번호가 잘못되었습니다.");
      setIsPasswordMatch(false);
    }  
  };

  return (
    <ProfileEditContainer>
      <ProfileWrapper>
        <ProfileBox>
          <ProfileImage>
            <img src={profileUrl} alt="Profile" />
          </ProfileImage>
          <FileInputLabel>
            +
            <FileInput
              type="file"
              accept="image/*"
              onChange={handleFileInputChange}
            />
          </FileInputLabel>
        </ProfileBox>
      </ProfileWrapper>
      <InputContainer>
        <p>이름</p>
        <Input
          type="text"
          name="userName"
          placeholder="이름을 입력해주세요"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
            setIsName(e.target.value.trim() !== "");
          }}
        />
      </InputContainer>

      <InputContainer>
        <p>아이디</p>
        <Input
          type="text"
          placeholder="아이디 입력 (5~15자)"
          value={userInfo.userId}
          disabled
        />
      </InputContainer>

      <InputContainer>
        <p>비밀번호</p>
        <Input
          type="password"
          name="userPw"
          placeholder="비밀번호 입력 (영문자, 숫자, 특수문자 포함 8~25자)"
          // value={userInfo.userPw ? "*".repeat(userInfo.userPw.length) : ""}
          value={"*".repeat(userInfo.userPw.length)}
          disabled
        />
        <PasswordChangeButton onClick={() => setShowPasswordModal(true)}>
          비밀번호 수정
        </PasswordChangeButton>
      </InputContainer>
      <InputContainer>
        <p>이메일 주소</p>
        <Input
          type="email"
          name="userMail"
          placeholder="이메일 주소 입력"
          value={inputMail}
          onChange={onChangeMail}
        />
      </InputContainer>
      <Items variant="hint">
        {mailMessage && (
          <span className={`message ${isMail ? "success" : "error"}`}>
            {mailMessage}
          </span>
        )}
      </Items>
      <InputContainer>
        <p>전화번호</p>
        <Input
          type="text"
          placeholder="전화번호 -(하이픈) 포함 13자리 입력"
          value={userInfo.userPhone}
          disabled
        />
      </InputContainer>
      {/* <InputContainer>
        <p>생년월일</p>
        <Input
          type="date"
          name="userBirth"
          placeholder="생일"
          value={inputBirth}
          onChange={(e) => setInputBirth(e.target.value)}
        />
      </InputContainer> */}
      <Items variant="item2">
        <Button enabled={isName && isMail} onClick={onClickSaveChanges}>
          저장
        </Button>
      </Items>

      {showPasswordModal && (
        <NavBarModal
          show={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
        >
          <h2>비밀번호 변경</h2>
          <Input
            type="password"
            placeholder="현재 비밀번호"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          <span className={`message ${isPasswordMatch ? "success" : "error"}`}>
            {passwordMessage}
          </span>
          <Button onClick={handlePasswordChange}>변경</Button>
        </NavBarModal>
      )}
    </ProfileEditContainer>
  );
};

const ProfileEditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 0 5vw;
  /* max-width: 700px; */
  width: 90%;
  margin: auto;
  border: 1px solid #000;
  border-radius: 10px;
  align-items: center;

  .footer {
    display: flex;
    position: absolute;
    background-color: #ccc;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    color: #222;
    font-size: 0.8em;
    justify-content: center;
    align-items: center;
  }
`

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2vw 0;
`

const ProfileBox = styled.div`
  position: relative;
`

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #ccc;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const FileInputLabel = styled.label`
  width: 40px;
  text-align: center;
  font-size: 1.8rem;
  aspect-ratio: 1 / 1;
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  /* z-index: 999; */
`;

const FileInput = styled.input`
  display: none;
`;

const Input = styled.input`
  width: 415px;
  padding: 9px;
  margin-bottom: 4px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: white;
  color: black;
  outline: none;
  &:focus {
    border-color: black;
  }
`;

const PasswordChangeButton = styled.button`
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

export default MemberInfo;
