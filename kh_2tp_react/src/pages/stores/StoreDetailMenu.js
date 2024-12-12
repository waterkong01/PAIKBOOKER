import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";

const ArrowButton = styled.button`
  position: absolute;
  text-align: center;
  width: 5%;
  height: 15vw;
  background-color: #e3e3e3;
  color: black;
  border: none;
  cursor: pointer;
  z-index: 10;
  padding: 1%;
  font-size: clamp(10px, 1vw, 12px);
  border-radius: 0.7em;
  &.left-arrow {
    left: 0;
  }
  &.right-arrow {
    right: 0;
  }
`;

const MenuContainer = styled.div`
  width: auto;
  height: 30vw;
  margin: 0 7%;
  display: flex;
  align-items: top;
  gap: 2%;
  overflow-x: hidden;
  white-space: nowrap;
  scroll-behavior: smooth;
  position: relative;
`;

const StoreDetailMenu = () => {
  const { storeNo } = useParams();
  const [menu, setMenu] = useState([]);
  const containerRef = useRef(null);

  // 메뉴 조회
  useEffect(() => {
    const getMenus = async () => {
      try {
        const response = await AxiosApi.getMenus(storeNo);
        setMenu(response);
      } catch (error) {
        console.error("메뉴 조회 오류 발생 : ", error);
      }
    };
    getMenus();
  }, []);

  // 화살표 한번 클릭시 이동량
  const scrollAmount = 300;

  // 왼쪽 화살표 클릭
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -scrollAmount,
      });
    }
  };

  // 오른쪽 화살표 클릭
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: scrollAmount,
      });
      console.log(containerRef.current);
    }
  };

  return (
    <>
      <ArrowButton className="left-arrow" onClick={scrollLeft}>
        &lt;
      </ArrowButton>
      <MenuContainer ref={containerRef}>
        {menu.map((item, index) => (
          <div key={index}>
            <img
              src={item.menu.menuImg}
              alt={item.menu.menuName}
              style={{
                height: "50%",
                objectFit: "contain",
                borderRadius: "1em",
              }}
            />
            <br />
            <p
              style={{
                textAlign: "center",
                fontSize: "clamp(14px, 1.3vw, 17px)",
              }}
            >
              {item.menu.menuName}
            </p>
            <br />
          </div>
        ))}
      </MenuContainer>
      <ArrowButton className="right-arrow" onClick={scrollRight}>
        &gt;
      </ArrowButton>
    </>
  );
};

export default StoreDetailMenu;
