import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import { storage } from "../../api/Firebase"; // Firebase 가져오기

// 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* height: 100vh; */
  /* background-color: #f9f9f9; */
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  /* background-color: white; */
  /* padding: 20px; */
  padding: 100px;
  border-radius: 10px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
`;

const UserImage = styled.img`
  width: 100px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  /* border: 2px solid #007bff; */
  display: ${(props) =>
    props.isLoading ? "none" : "block"}; /* 로딩 중에는 이미지 숨기기 */
`;

const MemberName = styled.h2`
  font-size: 20px;
  color: #333;
  
`;
const BoldName = styled.span`
  font-weight: bold;
`

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
`;


const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  width: 90%;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 화면이 좁아지면 한 줄에 3개 */
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 더 좁아지면 한 줄에 2개 */
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 모바일 화면에서는 한 줄에 1개 */
  }
`;

const MenuBox = styled.a`
  text-decoration: none;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  color: #333;
  transition: transform 0.2s;
  aspect-ratio: 17 / 9;
  display: flex;
  align-items: flex-end;
  text-align: left;

  &:hover {
    transform: scale(1.05);
  }
  h2 {
    margin-bottom: 5px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: #666;
  }
`;

// 마이페이지 컴포넌트
const Member = () => {
  const [member, setMember] = useState(null); // 사용자 정보 상태
  const [userImage, setUserImage] = useState(null); // 사용자 이미지  상태
  const [isLoading, setIsLoading] = useState(true); // 이미지 로딩 상태
  const [error, setError] = useState(""); // 에러 메시지 상태
  const navigate = useNavigate(); // 네비게이션 훅

  useEffect(() => {
    const fetchMemberData = async () => {
      const userId = localStorage.getItem("loggedInUserId"); // 로컬스토리지에서 userId 가져오기

      try {
        const response = await AxiosApi.getMemberInfo(userId); // 서버에서 사용자 정보 가져오기
        setMember(response.data); // 사용자 정보 상태 업데이트

        const userImg = response.data.userImg; // DB에서 이미지 URL 가져오기
        if (userImg) {
          setUserImage(userImg); // DB에서 받아온 URL을 바로 사용
          setIsLoading(false); // 이미지 URL이 있을 때 로딩 종료
        } else {
          setUserImage(""); // 이미지가 없으면 기본 이미지로 설정
          setIsLoading(false); // 로딩 종료
        }
      } catch (err) {
        setError("사용자 정보를 불러오는 중 오류가 발생했습니다.");
        console.error(err);
        setIsLoading(false); // 오류 발생 시에도 로딩 종료
      }
    };

    fetchMemberData();
  }, []);

/*   const handleEditClick = () => {
    navigate("/member/MemberInfo"); // 멤버 수정 페이지로 이동
  }; */

  const handleMenuBoxClick = (id) => {
    navigate(`/MemberDetail/${id}`);
  };

  const menuItems = [
    { id: 1, title: "Profile", description: "개인정보 수정" },
    { id: 2, title: "Reservation", description: "내가 예약한 장소" },
    { id: 3, title: "Review", description: "내가 작성한 리뷰" },
    { id: 4, title: "Notice", description: "공지사항" },
    { id: 5, title: "Family Site", description: "패밀리 사이트 바로가기" },
    { id: 6, title: "Privacy Policy", description: "개인정보 처리방침" },
    { id: 7, title: "Terms and Conditions", description: "이용약관" },
  ];

  return (
    <Container>
      <UserInfo>
        {/* 이미지 로딩 중에는 기본 이미지를 숨기고, 실제 이미지를 보여줌 */}
        {isLoading ? (
          <UserImage
            src="https://firebasestorage.googleapis.com/v0/b/project-mini-db956.firebasestorage.app/o/default_profile.png?alt=media&token=6ccfd06d-4d99-4c7b-b603-1baf0517116b"
            alt="기본 이미지"
            isLoading={isLoading}
          />
        ) : (
          <UserImage
            src={
              userImage ||
              "https://firebasestorage.googleapis.com/v0/b/project-mini-db956.firebasestorage.app/o/default_profile.png?alt=media&token=6ccfd06d-4d99-4c7b-b603-1baf0517116b"
            }
            alt="Profile"
            isLoading={isLoading}
          />
        )}

        <MemberName>
          {member ? 
            <>
              <BoldName>
                {member.userName}
              </BoldName>
              님, 안녕하세요!
            </>
          : "불러오는중"}
        </MemberName>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {/* <EditButton onClick={handleEditClick}>멤버 수정</EditButton> */}
      </UserInfo>
      <MenuContainer className="menu-container">
        {menuItems.map((item) => (
          <MenuBox key={item.id} onClick={() => handleMenuBoxClick(item.id)}>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </MenuBox>
        ))}
      </MenuContainer>

{/*       {selectedMenu && (
        <div className="menu-detail">
          <h2>Detail for {menuItems.find((item) => item.id === selectedMenu).title}</h2>
          <p>
            {menuItems.find((item) => item.id === selectedMenu).description}
          </p>
          <button onClick={() => setSelectedMenu(null)}>Go Back</button>
        </div>
      )} */}
    </Container>
  );
};

/* const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`; */

export default Member;