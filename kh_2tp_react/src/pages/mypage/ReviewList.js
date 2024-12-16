import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { Rating } from "@mui/material";

const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ReviewCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    /* background-color: #f9f9f9; */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ReviewInfo = styled.div`
    font-size: 16px;
    color: #333;
    display: flex;
    flex-direction: column;
    gap: 1vw;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 10px;
`;

const ReviewButton = styled.button`
    height: 40px;
    padding: 0 16px;
    border-radius: 5px;
    border: 1px solid;
    cursor: pointer;
    &:active {
        background-color: #000;
        color: #FFF;
    } 
`;

const StoreWrapper = styled.div`
    display: flex;
    justify-content: flex-start;;
    align-items: center;
    gap: 3vw;
`;

const RatingWrapper = styled.div`
    display: flex;
    justify-content: flex-start;;
    gap: 3vw;
/*     .RatingBox {
        width: 200px;
    } */
`;

const ReviewList = () => {
    const [reviews, setReviews] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const loggedInUserId = localStorage.getItem("loggedInUserId");
        setUserId(loggedInUserId);

        const getReviews = async () => {
            try {
                const rsp = await AxiosApi.reviewList();
                const filteredReviews = rsp.data.filter(review => review.userId === loggedInUserId);
                setReviews(filteredReviews);
            } catch (e) {
                console.error("Error:", e);
                alert("서버가 응답하지 않습니다.", e);
            }
        };

        if (loggedInUserId) {
            getReviews();
        }
    }, []);

    const onRemove = async (rvNo) => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;

        try {
            const response = await AxiosApi.reviewDelete(rvNo);
            if (response.status === 200) {
                alert("리뷰가 삭제되었습니다.");
                setReviews(reviews.filter(review => review.rvNo !== rvNo));
            } else {
                alert("리뷰 삭제에 실패했습니다.");
            }
        } catch (e) {
            console.error("Error:", e);
            alert("서버 요청 중 오류가 발생했습니다.");
        }
    };

    return (
        <ReviewContainer>
            {reviews.length > 0 ? (
                reviews.map(review => (
                    <ReviewCard key={review.rvNo}>
                        <ReviewInfo>
                            <div><strong>작성일:</strong> {review.rvDate}</div>
                            <StoreWrapper>
                                <div><strong>매장명:</strong> {review.storeName}</div>
                                <div><strong>시간:</strong> {review.rTime}:00</div>
                            </StoreWrapper>
                            <RatingWrapper>
                                <div className="RatingBox">
                                    <strong>가격:</strong> 
                                    <Rating
                                        name={`price-rating-${review.rvNo}`}
                                        value={review.rvPrice}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                                <div className="RatingBox">
                                    <strong>맛:</strong> 
                                    <Rating
                                        name={`taste-rating-${review.rvNo}`}
                                        value={review.rvTaste}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
{/*                             </RatingWrapper>
                            <RatingWrapper> */}
                                <div className="RatingBox">
                                    <strong>분위기:</strong> 
                                    <Rating
                                        name={`vibe-rating-${review.rvNo}`}
                                        value={review.rvVibe}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                                <div className="RatingBox">
                                    <strong>친절도:</strong> 
                                    <Rating
                                        name={`kind-rating-${review.rvNo}`}
                                        value={review.rvKind}
                                        precision={0.5}
                                        readOnly
                                    />
                                </div>
                            </RatingWrapper>
                        </ReviewInfo>
                        <ButtonContainer>
                            <ReviewButton>
                                <Link to={`/EditReview?userId=${review.userId}&storeName=${review.storeName}&rSubmitTime=${review.rSubmitTime}&rTime=${review.rTime}&rvPrice=${review.rvPrice}&rvTaste=${review.rvTaste}&rvVibe=${review.rvVibe}&rvKind=${review.rvKind}&rvContent=${review.rvContent}`} style={{ textDecoration: 'none', color: '#000' }}>
                                    리뷰 수정
                                </Link>
                            </ReviewButton>
                            <ReviewButton onClick={() => onRemove(review.rvNo)}>
                                리뷰 삭제
                            </ReviewButton>
                        </ButtonContainer>
                    </ReviewCard>
                ))
            ) : (
                <div>리뷰가 없습니다.</div>
            )}
        </ReviewContainer>
    );
}

export default ReviewList;