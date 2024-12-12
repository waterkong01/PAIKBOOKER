import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const { kakao } = window;

// 주소로 동작하는 지도함수
const StoreDetailMap = () => {
  const { storeNo } = useParams();
  const [store, setStore] = useState(null); // 지점 정보

  // 매장 정보를 받아오는 API 호출
  useEffect(() => {
    const getStoreAddrNameMarker = async () => {
      try {
        const response = await AxiosApi.getStoreAddrNameMarker(storeNo);
        setStore(response);
      } catch (error) {
        console.error("지도 가져오기 오류:", error);
      }
    };
    getStoreAddrNameMarker();
  }, [storeNo]);

  useEffect(() => {
    if (!store) return;

    //지도를 담을 영역의 DOM 레퍼런스
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.49900095617105, 127.03286623287303), // 지도의 중심좌표
      level: 3, // 지도의 레벨 (확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    const map = new kakao.maps.Map(mapContainer, mapOptions);
    const geocoder = new kakao.maps.services.Geocoder();

    // 지도 생성 후에 z-index 설정
    setTimeout(() => {
      const mapWrapper = mapContainer.querySelector(".kakao-map");
      if (mapWrapper) {
        mapWrapper.style.zIndex = "-1"; // 지도 레이어의 z-index를 낮게 설정
      }

      // 마커와 지도 레이어의 z-index를 각각 수정
      const markers = mapContainer.querySelectorAll(".kakao-marker");
      markers.forEach((marker) => {
        marker.style.zIndex = "1"; // 마커의 z-index를 높게 설정
      });

      const mapOverlay = mapContainer.querySelector(".kakao-map-overlay");
      if (mapOverlay) {
        mapOverlay.style.zIndex = "999"; // 오버레이의 z-index를 높게 설정
      }
    }, 100); // 지도 렌더링 후 0.1초 뒤에 z-index 수정

    geocoder.addressSearch(store.storeAddr, (result, status) => {
      // 정상적으로 검색이 완료됐으면
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시
        const markerImage = new kakao.maps.MarkerImage(
          store.brandMarker,
          new kakao.maps.Size(50, 50),
          { offset: new kakao.maps.Point(27, 48) }
        );

        const marker = new kakao.maps.Marker({
          position: coords,
          image: markerImage,
          map: map,
        });

        map.setCenter(coords);
      } else {
        console.error("주소 검색 실패:", status);
      }
    });
  }, [store]);

  return (
    <>
      <div
        id="map"
        style={{
          width: "50vw",
          height: "50vw",
          zIndex: 0,
        }}
      ></div>
    </>
  );
};

export default StoreDetailMap;
