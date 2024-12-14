import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { ReviewContainer, StyledTable } from "../../components/ReviewComponent";

const ReviewLink = styled(Link)`
    text-decoration: none;
    color: #000;
    &:active {
        color: #FFF;
    } 
`
export const ReviewButton = styled.button`
    height: 40px;
    aspect-ratio: 7 / 4;
    border-radius: 5px;
    &:active {
        background-color: #000;
        color: #FFF;
    } 
`

const Reservation = () => {
    const [reservations, setReservations] = useState("");
    const [userId, setUserId] = useState(null);

    useEffect (() => {
        const loggedInUserId = localStorage.getItem("loggedInUserId");
        setUserId(loggedInUserId);  // 로그인된 사용자 ID 상태에 저장

        const getReservations = async () => {
            try {
/*                 const rsp = await AxiosApi.reservationList();
                console.log(rsp.data);
                setReservations(rsp.data); */
                const rsp = await AxiosApi.reservationList(); // 리뷰 목록 API 호출
                // 로그인된 사용자 ID와 리뷰 작성자 ID가 일치하는 리뷰만 필터링
                const filteredReservations = rsp.data.filter(reservation => reservation.userId === loggedInUserId);
                setReservations(filteredReservations);  // 필터링된 리뷰 상태에 저장
            } catch (e) {
                console.error("Error:", e);
                alert("서버가 응답하지 않습니다.", e);
            }
        };
        if (loggedInUserId) {
            getReservations();  // 로그인된 사용자 ID가 있을 때만 리뷰 목록 불러오기
        }
    }, []);

    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        {/* <th>예약 번호</th> */}
                        {/* <th>사용자 아이디</th> */}
                        {/* <th>예약자명</th> */}
                        {/* <th>매장 번호</th> */}
                        <th>매장명</th>
                        <th>매장 연락처</th>
                        <th>예약 인원</th>
                        <th>방문 예정 시간</th>
                        <th>예약완료일</th>
                        {/* <th>브랜드명</th> */}
                    </tr>
                </thead>
                <tbody>
                    {reservations.length > 0 ? (
                        reservations &&
                        reservations.map(reservation => (
                            <tr key={reservation.userId}>
                                {/* <td>{reservation.rNo}</td> */}
                                {/* <td>{reservation.userId}</td> */}
                                {/* <td>{reservation.userName}</td> */}
                                {/* <td>{reservation.storeNo}</td> */}
                                <td>{reservation.storeName}</td>
                                <td>{reservation.storePhone}</td>
                                <td>{reservation.rPersonCnt}</td>
                                <td>{reservation.rTime}:00</td>
                                <td>{reservation.rSubmitTime}</td>
                                {/* <td>{reservation.brandName}</td> */}
                                <td>
                                    {!reservation.hasReview && ( // hasReview가 false일 때만 버튼 렌더링
                                        <ReviewButton>
                                            <ReviewLink to={`/AddReview?userId=${reservation.userId}&storeName=${reservation.storeName}&rSubmitTime=${reservation.rSubmitTime}&rTime=${reservation.rTime}&brandName=${reservation.brandName}`} className="link_style">
                                                <span>리뷰 추가</span>
                                            </ReviewLink>
                                        </ReviewButton>
                                    )}
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="11">예약 내역이 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </>
    );
}

export default Reservation;