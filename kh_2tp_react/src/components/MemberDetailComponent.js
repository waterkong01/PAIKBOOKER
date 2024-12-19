import styled from "styled-components";

export const Mypage = styled.p`
    font-size: 1.8em;
    margin-top: 5vh;
    padding-left: 3vw;
`
export const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  margin-top: 2vh;
  padding: 0 3vw;
  display: flex;
  /* gap: 3vw; */
  justify-content: space-between;
  padding-bottom: 100px;
  flex-wrap: wrap;
  @media (max-width: 1405px) {
    gap: 5vh;
    flex-direction: column;
  }
  /*     @media (max-width: 768px) {
        flex-direction: column;
    } */
`;
export const MemberDetailLeft = styled.div`
    width: 48%;
    .menu_container {
        display: grid;
        gap: 5%;
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1405px) {
        width: 100%;
        .menu_container {
            grid-template-columns: repeat(3, 1fr);
            gap: 2vw;
        }
    }
    @media (max-width: 600px) {
        width: 100%;
        .menu_container {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media (max-width: 400px) {
        .menu_container {
            grid-template-columns: repeat(2, 1fr);
            gap: 5vw;
        }
    }
`
export const MenuBox = styled.div`
    background-color: white;
    border-radius: 30px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    /* color: #333; */
    background-color: ${(props) => (props.isActive ? "black" : "#F0F0F0")};
    color: ${(props) => (props.isActive ? "white" : "black")};
    transition: transform 0.2s;
    aspect-ratio: 3 / 1;
    @media (max-width: 1077px) {
        aspect-ratio: 2 / 1;
    }
    @media (max-width: 960px) {
        aspect-ratio: 2.5 / 1.5;
    }
    @media (max-width: 800px) {
        aspect-ratio: 1 / 0.5;
    }
    @media (max-width: 600px) {
        aspect-ratio: 1 / 0.5;
        padding: 15px;
    }
    @media (max-width: 400px) {
        aspect-ratio: 1 / 0.3;
        padding: 20px;
    }
/*     @media (max-width: 960px) {
        aspect-ratio: 3 / 1.5;
    } */
    display: flex;
    align-items: flex-end;
    text-align: left;
    h2 {
    font-weight: bold;
    }
    p {
    font-size: 16px;
    color: ${(props) => (props.isActive ? "white" : "black")};
    }
`;

export const MemberDetailRight = styled.div`
    width: 48%;
    @media (max-width: 1405px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const TxtBox = styled.div`
    background-color: #F0F0F0;
    padding: 30px;
    border-radius: 30px;
    margin-bottom: 3vw;
    p { white-Space: pre-wrap; }
`