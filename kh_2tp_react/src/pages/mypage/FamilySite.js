import styled from "styled-components";
import { Link } from "react-router-dom";
import TheBornSvg from "../../image/TheBorn.svg";
import SearchSvg from "../../image/Search.svg";

const Container = styled.div`
    display: grid;
    gap: 2vw;
    grid-template-columns: repeat(2, 1fr);
    justify-items: stretch;
    margin-bottom: 3vw;
    /* margin-bottom: 6vw; */
    & > a:first-child {
        grid-column: span 2; /* 첫 번째 박스는 전체 너비 차지 */
        aspect-ratio: initial;
    }
    @media (max-width: 1405px) {
        margin-bottom: 3vw;
    }
`
const ReviewLink = styled(Link)`
    height: 250px;
    /* background-color: royalblue; */
    text-decoration: none;
    color: #000;
    border: 1px solid #000;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:active {
        color: #FFF;
    }
    img {
        max-width: 100%;
        max-height: 80%;
        border-radius: 20px;
    }
    span {
        margin-top: 10px;
        font-size: 1rem;
        font-weight: bold;
    }
    aspect-ratio: 58 / 45;
`
const FamilyBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BrandLogo = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F0F0F0;
    border-radius: 30px 30px 0 0;
    img {
        width: 50%;
    }
`
const SearchImg = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 50%;
    }
`

const FamilySite = () => {
    const urlMap = [
        { brandName: '빽보이피자',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%b9%bd%eb%b3%b4%ec%9d%b4%ed%94%bc%ec%9e%90/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자02.png?alt=media'
        },
        { brandName: '역전우동',
            url: 'https://udon0410.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동02.png?alt=media'
        },
        { brandName: '빽다방',
            url: 'https://paikdabang.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방02.png?alt=media'
        },
        { brandName: '홍콩반점',
            url: 'https://www.theborn.co.kr/theborn_brand/%ed%99%8d%ec%bd%a9%eb%b0%98%ec%a0%902/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점02.png?alt=media'
        },
        { brandName: '롤링파스타',
            url: 'https://rolling-pasta.com/#kv',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타02.png?alt=media'
        },
        { brandName: '한신포차',
            url: 'https://hanshinpocha.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차02.png?alt=media'
        },
        { brandName: '백스비어',
            url: 'https://paiksbeer.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어02.png?alt=media'
        },
        { brandName: '새마을식당',
            url: 'https://newmaul.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당02.png?alt=media'
        },
        { brandName: '제순식당',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%a0%9c%ec%88%9c%ec%8b%9d%eb%8b%b9/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당02.png?alt=media'
        },
        { brandName: '리춘시장',
            url: 'https://start.theborn.co.kr/prebrand_detail.php?bc=16',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장02.png?alt=media'
        },
        { brandName: '고투웍',
            url: 'https://www.theborn.co.kr/theborn_brand/%ea%b3%a0%ed%88%ac%ec%9b%8d/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍02.png?alt=media'
        },
        { brandName: '홍콩분식',
            url: 'https://www.theborn.co.kr/theborn_brand/%ed%99%8d%ec%bd%a9%eb%b6%84%ec%8b%9d/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식02.png?alt=media'
        },
        { brandName: '백종원의쌈밥',
            url: 'https://ssambap.co.kr/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥02.png?alt=media'
        },
        { brandName: '본가',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%b3%b8%ea%b0%80/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가02.png?alt=media'
        },
        { brandName: '인생설렁탕',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%9d%b8%ec%83%9d%ec%84%a4%eb%a0%81%ed%83%95/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕02.png?alt=media'
        },
        { brandName: '막이오름',
            url: 'https://www.theborn.co.kr/theborn_brand/%eb%a7%89%ec%9d%b4%ec%98%a4%eb%a6%84/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름02.png?alt=media'
        },
        { brandName: '연돈볼카츠',
            url: 'https://www.theborn.co.kr/theborn_brand/%ec%97%b0%eb%8f%88%eb%b3%bc%ec%b9%b4%ec%b8%a0/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠02.png?alt=media'
        },
        { brandName: '돌배기집',
            url: 'https://dolbaegi.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집02.png?alt=media'
        },
        { brandName: '미정국수',
            url: 'https://www.0410noodle.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수02.png?alt=media'
        },
        { brandName: '백철판',
            url: 'https://www.paiks-pan.com/',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판02.png?alt=media'
        },
    ];

    return (
        <Container>
            {/* 더본메인 */}
            <ReviewLink to="https://www.theborn.co.kr/">
                <FamilyBox>
                    {/* <TheBornSvg /> */}
                    <BrandLogo>
                        <img src={TheBornSvg} alt="The Born Logo" />
                    </BrandLogo>
                    <SearchImg>
                        <img src={SearchSvg} alt="Search Img" />
                    </SearchImg>
                </FamilyBox>
            </ReviewLink>

            {urlMap.map((brand, index) => (
                <ReviewLink to={brand.url} key={index} target="_blank" rel="noopener noreferrer">
                    <FamilyBox>
                        <BrandLogo>
                            <img src={brand.imgUrl} alt={`${brand.brandName} logo`} />
                        </BrandLogo>
                        <SearchImg>
                            <img src={SearchSvg} alt="Search Img" />
                        </SearchImg>
                    </FamilyBox>
                </ReviewLink>
            ))}
        </Container>
    );
};

export default FamilySite;