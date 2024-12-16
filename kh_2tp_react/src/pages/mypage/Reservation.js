import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";

const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  margin-bottom: 3vw;
`;

const ReservationCard = styled.div`
  width: 100%;
  /* max-width: 600px; */
  padding: 20px;
  /* margin: 10px 0; */
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

const ReservationRow = styled.div`
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 1vw;
`;

const ReviewLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const ReviewButton = styled.button`
  width: 100%;
  max-width: 150px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const EmptyMessage = styled.div`
  margin-top: 20px;
  font-size: 18px;
  color: #666;
`;

const Reservation = () => {
  const [reservations, setReservations] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loggedInUserId = localStorage.getItem("loggedInUserId");
    setUserId(loggedInUserId);

    const fetchReservations = async () => {
      try {
        const rsp = await AxiosApi.reservationList();
        if (rsp.data) {
          const filteredReservations = rsp.data.filter(
            (reservation) => reservation.userId === loggedInUserId
          );
          setReservations(filteredReservations);
        }
      } catch (e) {
        console.error("Error:", e);
        alert("서버가 응답하지 않습니다.");
      }
    };

    if (loggedInUserId) fetchReservations();
  }, [userId]);

  return (
    <ReservationWrapper>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <ReservationCard key={reservation.rNo}>
            <ReservationRow>
              <div>
                <strong>매장명:</strong> {reservation.storeName}
              </div>
              {/*                         </ReservationRow>
                        <ReservationRow> */}
              <div>
                <strong>매장 연락처:</strong> {reservation.storePhone}
              </div>
              {/*                         </ReservationRow>
                        <ReservationRow> */}
              <div>
                <strong>예약 인원:</strong> {reservation.rPersonCnt}
              </div>
              {/*                         </ReservationRow>
                        <ReservationRow> */}
              <div>
                <strong>방문 예정 시간:</strong> {reservation.rTime}:00
              </div>
              {/*                         </ReservationRow>
                        <ReservationRow> */}
              <div>
                <strong>예약 완료일:</strong> {reservation.rSubmitTime}
              </div>
            </ReservationRow>
            {!reservation.hasReview && (
              <ReviewButton>
                <ReviewLink
                  to={`/AddReview?userId=${reservation.userId}&storeName=${reservation.storeName}&rSubmitTime=${reservation.rSubmitTime}&rTime=${reservation.rTime}&brandName=${reservation.brandName}`}
                >
                  리뷰 추가
                </ReviewLink>
              </ReviewButton>
            )}
          </ReservationCard>
        ))
      ) : (
        <EmptyMessage>예약 내역이 없습니다.</EmptyMessage>
      )}
    </ReservationWrapper>
  );
};

export default Reservation;
