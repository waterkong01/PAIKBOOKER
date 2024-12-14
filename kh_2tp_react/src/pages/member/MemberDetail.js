import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Container, MemberDetailLeft, MenuBox, MemberDetailRight, Mypage } from "../../components/MemberDetailComponent";
import MemberInfo from "./MemberInfo";
import Reservation from "../mypage/Reservation";
import ReviewList from "../mypage/ReviewList";
import Notice from  "../mypage/Notice";
import FamilySite from  "../mypage/FamilySite";
import PrivacyPolicy from  "../mypage/PrivacyPolicy";
import TermsAndConditions from  "../mypage/TermsAndConditions";

const MemberDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate(); // 네비게이션 훅

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
    
    const renderContent = (id) =>{
        switch (id) {
            case 1:
                return <MemberInfo />;
            case 2:
                return <Reservation />;
            case 3:
                return <ReviewList />;
            case 4:
                return <Notice />;
            case 5:
                return <FamilySite />;
            case 6:
                return <PrivacyPolicy />;
            case 7:
                return <TermsAndConditions />;
            default:
                return <p>항목을 선택해주세요</p>;
        }
    };

    return (
        <>
        <Mypage>My Page</Mypage>
        <Container>
            <MemberDetailLeft>
                <div className="menu_container">
                    {menuItems.map((item) => (
                    <MenuBox key={item.id} isActive={item.id === parseInt(id)} onClick={() => handleMenuBoxClick(item.id)}>
                        <div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        </div>
                    </MenuBox>
                    ))}
                </div>
            </MemberDetailLeft>
            <MemberDetailRight>
                {renderContent(parseInt(id))}
            </MemberDetailRight>
        </Container>
        </>
    );
};

export default MemberDetail;