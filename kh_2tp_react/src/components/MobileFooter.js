import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import MemberModal from "./MemberModal";
import ModalLoginPage from "./ModalLoginPage";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";

const MobileFooterContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 양옆에 배치 */
  align-items: center; /* 세로로 가운데 정렬 */
  width: 100%; /* 전체 너비를 차지하도록 설정 */
  height: 80px;
  border-top: 1px solid #e4e4e4;;
  background-color: #ffffff;
`;

const MobileGoHome = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 28vw;
  cursor: pointer;
  display: flex;
`;

const MobileInfo = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 28vw;
  cursor: pointer;
  display: flex;
`;

const MobileFooter = () => {
  const [mobileSearchData, setMobileSearchData] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("loggedInUserId") ? true : false
  );

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const handleModalLinkClick = (action) => {
    if (action === "login") {
      setModalOpen(false);
      setLoginModalOpen(true);
    } else if (action === "signup") {
      setModalOpen(false);
      setSignupModalOpen(true);
    } else if (action === "logout") {
      setIsLoggedIn(false); // 로그인 상태 false
      localStorage.removeItem("loggedInUserId"); // 로컬스토리지 삭제
      setModalOpen(false); // 모달 닫기
      navigate("/");
      alert("로그아웃 되었습니다.");
    } else if (action === "member") {
      navigate("/Member"); // 마이페이지 이동
      setModalOpen(false); // 모달 닫기
    }
  };
  return (
    <MobileFooterContainer>
      <MobileGoHome>
        {/* Link 컴포넌트로 이동 */}
        <Link to="/">
          <img
            style={{
              filter: "invert(1) grayscale(100%)",
              width: "100%",
              height: "100%",
            }}
            src="https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2Fhome_24dp_E8EAED.png?alt=media&token=fe1309f4-0f54-48e7-8b73-b79425b93640"
            alt=""
          />
        </Link>
      </MobileGoHome>
      <MobileInfo>
        <img
          style={{
            filter: "invert(1) grayscale(100%)",
            width: "100%",
            height: "100%",
          }}
          src="https://firebasestorage.googleapis.com/v0/b/photo-island-eeaa3.firebasestorage.app/o/PAIKBOOKER_BRAND_IMG%2Fperson_24dp_E8EAED.png?alt=media&token=3be47ba9-ed2f-41cd-813c-3d85bb1a3328"
          alt="Profile"
          onClick={handleImageClick}
        />
      </MobileInfo>

      {isLoggedIn ? (
        <MemberModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          handleModalLinkClick={handleModalLinkClick}
          setIsLoggedIn={setIsLoggedIn}
        />
      ) : (
        <ModalLoginPage
          isOpen={isModalOpen}
          closeModal={closeModal}
          handleModalLinkClick={handleModalLinkClick}
        />
      )}

      {isLoginModalOpen && (
        <LoginModal
          closeModal={closeLoginModal}
          setIsLoggedIn={setIsLoggedIn}
        />
      )}
      {isSignupModalOpen && <SignupModal closeModal={closeSignupModal} />}
    </MobileFooterContainer>
  );
};

export default MobileFooter;
