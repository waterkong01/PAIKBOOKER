import { Outlet, useLocation, useParams } from "react-router-dom";
import styled, { css } from "styled-components";
import NavBar1 from "../components/NavBar1";
import NavBar2 from "../components/NavBar2";
import NavBar3 from "../components/NavBar3";
import PCHome from "../components/PCHome";
import { useState, useEffect, useCallback } from "react";
import AxiosApi from "../api/AxiosApi";
import MobileHome from "../components/MobileHome.js";
import MobileFooter from "../components/MobileFooter.js";

const StyledHeader = styled.header`
  width: 100%;
  height: 260px;

  @media (max-width: 768px) {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: row;
    // MO 상세페이지에서 헤더 숨기기
    ${(props) =>
      props.hide &&
      css`
        display: none;
      `}
  }
`;

const StyledMain = styled.main`
  width: 100%;
  height: calc(100vh - 260px);
`;

const StyledFooter = styled.footer`
  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    z-index: 1000;
    position: fixed;
    // MO 상세페이지에서 푸터 숨기기
    ${(props) =>
      props.hide &&
      css`
        display: none;
      `}
  }
`;

const Layout = () => {
  // 카테고리 Dropdown 목록
  const [brandName, setBrandName] = useState("");
  const [reservationTime, setReservationTime] = useState("");
  const [region, setRegion] = useState("");
  const location = useLocation(); // 현재 경로 가져오기
  const { storeNo } = useParams();

  // Main 화면 띄워주는 Component에 Data 전달 (조건 검색 후 받은 Data[])
  const [PCdataReceivedAfterSearch, setPCDataReceivedAfterSearch] = useState([]); // 검색된 매장들

  // 컴포넌트가 처음 로드될 때, 기본적으로 모든 매장을 가져오는 검색
  const getPCDataFromServerAndUpdateStoreList = useCallback(
    async (region, brandName, reservationTime) => {
      try {
        // console.log("검색 조건:", { region, brandName, reservationTime }); // 파라미터 확인
        // API 호출을 통해 조건에 맞는 데이터를 가져옵니다.
        const response = await AxiosApi.navBarSearching(region, brandName, reservationTime);

        // if (response.data && response.data.length > 0) {
        //   console.log("검색된 매장들:", response.data);
        // } else {
        //   console.log("검색된 매장이 없습니다.");
        // }
        setPCDataReceivedAfterSearch(response); // 검색된 매장들 상태 업데이트
      } catch (error) {
        console.error("검색 실패:", error);
      }
    },
    []
  );

  useEffect(() => {
    getPCDataFromServerAndUpdateStoreList(region, brandName, reservationTime);
  }, [getPCDataFromServerAndUpdateStoreList, region, brandName, reservationTime]);


  // {UP} PC Version Data통신----------------------------------------------------------------------------------

  // {DOWN} Mobile Version Data 통신---------------------------------------------------------------------------\
  const [searchData, setSearchData] = useState("");
  const [mobileDataReceivedAfterSearch, setMobileDataReceivedAfterSearch] = useState([]); // 검색된 매장들

  const getMobileDataFromServerAndUpdateSearchList = useCallback(
    async(searchData) => {
      try {
        const rsp = await AxiosApi.getMobileHomeSearchData(searchData);
        setMobileDataReceivedAfterSearch(rsp);
          } catch (error) {
            console.error("검색 실패:", error)
      }
   },
   []
  );

  useEffect(() => {
    getMobileDataFromServerAndUpdateSearchList(searchData);
  }, [getMobileDataFromServerAndUpdateSearchList,searchData]);

  //------------------------------------------------------------------------------
    const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // 화면 너비가 특정 값 이하일 때 모바일로 간주 (예: 768px 이하)
        setIsMobile(window.innerWidth <= 768);
      };
  
      // 초기화 및 리사이즈 이벤트 리스너
      handleResize();
      window.addEventListener('resize', handleResize);
     
      // 클린업
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  // MO 상세페이지에서 헤더/푸터 숨기기
  const shouldHideHeader = location.pathname === `/stores/${storeNo}`;
  const shouldHideFooter = location.pathname === `/stores/${storeNo}`;

  return (
    <>
      <StyledHeader hide={shouldHideHeader}>
      <NavBar1
          getMobileDataFromServerAndUpdateSearchList={
            getMobileDataFromServerAndUpdateSearchList}
        /> 
        <NavBar2
          getPCDataFromServerAndUpdateStoreList={
            getPCDataFromServerAndUpdateStoreList
          }
        />
        <NavBar3 />
      </StyledHeader>

      <StyledMain>
          {/* 디버깅용 상태 출력 */}
          {console.log("현재 PCStores 상태:", PCdataReceivedAfterSearch)}{""}
          {location.pathname === "/" && !isMobile && (
          <PCHome PCdataReceivedAfterSearch={PCdataReceivedAfterSearch} />
        )}
          {/* 디버깅용 상태 출력 */}
          {console.log("현재 MobileStores 상태:", mobileDataReceivedAfterSearch)}{""}
          {location.pathname === "/" && isMobile && (
          <MobileHome mobileDataReceivedAfterSearch={mobileDataReceivedAfterSearch} />
        )}
        <Outlet />
      </StyledMain>
      <StyledFooter hide={shouldHideFooter}>
      <MobileFooter/>
      </StyledFooter>
    </>
  );
};

export default Layout;
