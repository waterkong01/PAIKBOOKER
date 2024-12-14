-- MENU 테이블 생성
CREATE TABLE MENU_TB (
	MENU_NO INTEGER NOT NULL PRIMARY KEY,	/* 메뉴번호 */
	BRAND_NAME VARCHAR2(20) NOT NULL,		/* 브랜드명 */
	MENU_NAME VARCHAR2(50) NOT NULL,		/* 메뉴명 */
	MENU_IMG VARCHAR2(500) NOT NULL,		/* 메뉴사진 URL */
	--	FK 제약조건
	CONSTRAINT FK_MENU_BRAND
		FOREIGN KEY (BRAND_NAME)
		REFERENCES BRAND_TB (BRAND_NAME)
		ON DELETE CASCADE
);


-- MENU_NO 시퀀스 생성
CREATE SEQUENCE MENU_NO_SEQ
INCREMENT BY 1
START WITH 1
NOCYCLE
NOCACHE;


-- MENU 더미 데이터 생성
INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽보이피자', '슈퍼빽보이피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F01%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%9001%EC%8A%88%ED%8D%BC%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽보이피자', '울트라빽보이피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F01%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%9002%EC%9A%B8%ED%8A%B8%EB%9D%BC%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽보이피자', '체다콘치즈피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F01%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%9003%EC%B2%B4%EB%8B%A4%EC%BD%98%EC%B9%98%EC%A6%88%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽보이피자', '열탄불고기피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F01%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%9004%EC%97%B4%ED%83%84%EB%B6%88%EA%B3%A0%EA%B8%B0%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽보이피자', '동글동글감자밭피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F01%EB%B9%BD%EB%B3%B4%EC%9D%B4%ED%94%BC%EC%9E%9005%EB%8F%99%EA%B8%80%EB%8F%99%EA%B8%80%EA%B0%90%EC%9E%90%EB%B0%AD%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '역전우동', '옛날우동', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F02%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%9901%EC%98%9B%EB%82%A0%EC%9A%B0%EB%8F%99.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '역전우동', '모둠어묵우동', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F02%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%9902%EB%AA%A8%EB%91%A0%EC%96%B4%EB%AC%B5%EC%9A%B0%EB%8F%99.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '역전우동', '김치우동', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F02%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%9903%EA%B9%80%EC%B9%98%EC%9A%B0%EB%8F%99.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '역전우동', '새우튀김우동', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F02%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%9904%EC%83%88%EC%9A%B0%ED%8A%80%EA%B9%80%EC%9A%B0%EB%8F%99.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '역전우동', '야채튀김우동', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F02%EC%97%AD%EC%A0%84%EC%9A%B0%EB%8F%9905%EC%95%BC%EC%B1%84%ED%8A%80%EA%B9%80%EC%9A%B0%EB%8F%99.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽다방', '아메리카노', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F03%EB%B9%BD%EB%8B%A4%EB%B0%A901%EC%95%84%EB%A9%94%EB%A6%AC%EC%B9%B4%EB%85%B8.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽다방', '원조커피', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F03%EB%B9%BD%EB%8B%A4%EB%B0%A902%EC%9B%90%EC%A1%B0%EC%BB%A4%ED%94%BC.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽다방', '달달연유라떼', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F03%EB%B9%BD%EB%8B%A4%EB%B0%A903%EB%8B%AC%EB%8B%AC%EC%97%B0%EC%9C%A0%EB%9D%BC%EB%96%BC.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽다방', '카페모카', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F03%EB%B9%BD%EB%8B%A4%EB%B0%A904%EC%B9%B4%ED%8E%98%EB%AA%A8%EC%B9%B4.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '빽다방', '아이스크림카페라떼', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F03%EB%B9%BD%EB%8B%A4%EB%B0%A905%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EC%B9%B4%ED%8E%98%EB%9D%BC%EB%96%BC.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩반점', '짬뽕', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F04%ED%99%8D%EC%BD%A9%EB%B0%98%EC%A0%9001%EC%A7%AC%EB%BD%95.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩반점', '짜장면', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F04%ED%99%8D%EC%BD%A9%EB%B0%98%EC%A0%9002%EC%A7%9C%EC%9E%A5%EB%A9%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩반점', '탕수육', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F04%ED%99%8D%EC%BD%A9%EB%B0%98%EC%A0%9003%ED%83%95%EC%88%98%EC%9C%A1.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩반점', '군만두', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F04%ED%99%8D%EC%BD%A9%EB%B0%98%EC%A0%9004%EA%B5%B0%EB%A7%8C%EB%91%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩반점', '멘보샤', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F04%ED%99%8D%EC%BD%A9%EB%B0%98%EC%A0%9005%EB%A9%98%EB%B3%B4%EC%83%A4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '롤링파스타', '로제크림쉬림프파스타', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F05%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%8001%EB%A1%9C%EC%A0%9C%ED%81%AC%EB%A6%BC%EC%89%AC%EB%A6%BC%ED%94%84%ED%8C%8C%EC%8A%A4%ED%83%80.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '롤링파스타', '까르보나라파스타', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F05%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%8002%EA%B9%8C%EB%A5%B4%EB%B3%B4%EB%82%98%EB%9D%BC.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '롤링파스타', '매운크림파스타', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F05%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%8003%EB%A7%A4%EC%9A%B4%ED%81%AC%EB%A6%BC%ED%8C%8C%EC%8A%A4%ED%83%80.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '롤링파스타', '찹스테이크', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F05%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%8004%EC%B0%B9%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '롤링파스타', '고르곤졸라피자', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F05%EB%A1%A4%EB%A7%81%ED%8C%8C%EC%8A%A4%ED%83%8005%EA%B3%A0%EB%A5%B4%EA%B3%A4%EC%A1%B8%EB%9D%BC%ED%94%BC%EC%9E%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '한신포차', '한신무뼈닭발', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F06%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A801%ED%95%9C%EC%8B%A0%EB%AC%B4%EB%BC%88%EB%8B%AD%EB%B0%9C.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '한신포차', '한신통닭', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F06%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A802%ED%95%9C%EC%8B%A0%ED%86%B5%EB%8B%AD.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '한신포차', '고추장석쇠불고기', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F06%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A803%EA%B3%A0%EC%B6%94%EC%9E%A5%EC%84%9D%EC%87%A0%EB%B6%88%EA%B3%A0%EA%B8%B0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '한신포차', '꼬치어묵탕', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F06%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A804%EA%BC%AC%EC%B9%98%EC%96%B4%EB%AC%B5%ED%83%95.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '한신포차', '고흥유자하이볼', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F06%ED%95%9C%EC%8B%A0%ED%8F%AC%EC%B0%A805%EA%B3%A0%ED%9D%A5%EC%9C%A0%EC%9E%90%ED%95%98%EC%9D%B4%EB%B3%BC.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백스비어', '치즈김치철판볶음밥', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F07%EB%B0%B1%EC%8A%A4%EB%B9%84%EC%96%B401%EC%B9%98%EC%A6%88%EA%B9%80%EC%B9%98%EC%B2%A0%ED%8C%90%EB%B3%B6%EC%9D%8C%EB%B0%A5.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백스비어', '빽타코', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F07%EB%B0%B1%EC%8A%A4%EB%B9%84%EC%96%B402%EB%B9%BD%ED%83%80%EC%BD%94.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백스비어', '짜계치', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F07%EB%B0%B1%EC%8A%A4%EB%B9%84%EC%96%B403%EC%A7%9C%EA%B3%84%EC%B9%98.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백스비어', '아이스황도', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F07%EB%B0%B1%EC%8A%A4%EB%B9%84%EC%96%B404%EC%95%84%EC%9D%B4%EC%8A%A4%ED%99%A9%EB%8F%84.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백스비어', '빽라거', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F07%EB%B0%B1%EC%8A%A4%EB%B9%84%EC%96%B405%EB%B9%BD%EB%9D%BC%EA%B1%B0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '새마을식당', '열탄불고기', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F08%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B901%EC%97%B4%ED%83%84%EB%B6%88%EA%B3%A0%EA%B8%B0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '새마을식당', '한돈모둠한판', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F08%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B902%ED%95%9C%EB%8F%88%EB%AA%A8%EB%91%A0%ED%95%9C%ED%8C%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '새마을식당', '한돈생삼겹살', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F08%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B903%ED%95%9C%EB%8F%88%EC%83%9D%EC%82%BC%EA%B2%B9%EC%82%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '새마을식당', '7분돼지김치', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F08%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B9047%EB%B6%84%EB%8F%BC%EC%A7%80%EA%B9%80%EC%B9%98.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '새마을식당', '빽라면', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F08%EC%83%88%EB%A7%88%EC%9D%84%EC%8B%9D%EB%8B%B905%EB%B9%BD%EB%9D%BC%EB%A9%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '제순식당', '제순세트', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F09%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B901%EC%A0%9C%EC%88%9C%EC%84%B8%ED%8A%B8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '제순식당', '닭순세트', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F09%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B902%EB%8B%AD%EC%88%9C%EC%84%B8%ED%8A%B8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '제순식당', '제육정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F09%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B903%EC%A0%9C%EC%9C%A1%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '제순식당', '홍순두부정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F09%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B904%ED%99%8D%EC%88%9C%EB%91%90%EB%B6%80%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '제순식당', '닭튀김정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F09%EC%A0%9C%EC%88%9C%EC%8B%9D%EB%8B%B905%EB%8B%AD%ED%8A%80%EA%B9%80%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '리춘시장', '누룽지꿔바로우', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F10%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A501%EB%88%84%EB%A3%BD%EC%A7%80%EA%BF%94%EB%B0%94%EB%A1%9C%EC%9A%B0.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '리춘시장', '멘바샥', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F10%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A502%EB%A9%98%EB%B0%94%EC%83%A5.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '리춘시장', '고추듬뿍유린기', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F10%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A503%EA%B3%A0%EC%B6%94%EB%93%AC%EB%BF%8D%EC%9C%A0%EB%A6%B0%EA%B8%B0.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '리춘시장', '마라탕', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F10%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A504%EB%A7%88%EB%9D%BC%ED%83%95.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '리춘시장', '뚝배기어향가지', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F10%EB%A6%AC%EC%B6%98%EC%8B%9C%EC%9E%A505%EB%9A%9D%EB%B0%B0%EA%B8%B0%EC%96%B4%ED%96%A5%EA%B0%80%EC%A7%80.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '고투웍', '베이스', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F11%EA%B3%A0%ED%88%AC%EC%9B%8D01%EB%B2%A0%EC%9D%B4%EC%8A%A4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '고투웍', '메인', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F11%EA%B3%A0%ED%88%AC%EC%9B%8D02%EB%A9%94%EC%9D%B8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '고투웍', '마라탕면', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F11%EA%B3%A0%ED%88%AC%EC%9B%8D03%EB%A7%88%EB%9D%BC%ED%83%95%EB%A9%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '고투웍', '게살계란국', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F11%EA%B3%A0%ED%88%AC%EC%9B%8D04%EA%B2%8C%EC%82%B4%EA%B3%84%EB%9E%80%EA%B5%AD.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '고투웍', '마라군만두', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F11%EA%B3%A0%ED%88%AC%EC%9B%8D05%EB%A7%88%EB%9D%BC%EA%B5%B0%EB%A7%8C%EB%91%90.PNG?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩분식', '짬뽕떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F12%ED%99%8D%EC%BD%A9%EB%B6%84%EC%8B%9D01%EC%A7%AC%EB%BD%95%EB%96%A2%EB%B3%B6%EC%9D%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩분식', '로제짬뽕떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F12%ED%99%8D%EC%BD%A9%EB%B6%84%EC%8B%9D02%EB%A1%9C%EC%A0%9C%EC%A7%AC%EB%BD%95%EB%96%A1%EB%B3%B6%EC%9D%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩분식', '직화무뼈닭발떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F12%ED%99%8D%EC%BD%A9%EB%B6%84%EC%8B%9D03%EC%A7%81%ED%99%94%EB%AC%B4%EB%BC%88%EB%8B%AD%EB%B0%9C%EB%96%A1%EB%B3%B6%EC%9D%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩분식', '마라떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F12%ED%99%8D%EC%BD%A9%EB%B6%84%EC%8B%9D04%EB%A7%88%EB%9D%BC%EB%96%A1%EB%B3%B6%EC%9D%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '홍콩분식', '오리지널떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F12%ED%99%8D%EC%BD%A9%EB%B6%84%EC%8B%9D05%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90%EB%96%A1%EB%B3%B6%EC%9D%B4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백종원의쌈밥', '대패삼겹살쌈밥정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F13%EC%8C%88%EB%B0%A501%EB%8C%80%ED%8C%A8%EC%82%BC%EA%B2%B9%EC%82%B4%EC%8C%88%EB%B0%A5%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백종원의쌈밥', '차돌박이쌈밥정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F13%EC%8C%88%EB%B0%A502%EC%B0%A8%EB%8F%8C%EB%B0%95%EC%9D%B4%EC%8C%88%EB%B0%A5%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백종원의쌈밥', '생삼겹살쌈밥정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F13%EC%8C%88%EB%B0%A503%EC%83%9D%EC%82%BC%EA%B2%B9%EC%82%B4%EC%8C%88%EB%B0%A5%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백종원의쌈밥', '칼집삼겹살쌈밥정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F13%EC%8C%88%EB%B0%A504%EC%B9%BC%EC%A7%91%EC%82%BC%EA%B2%B9%EC%82%B4%EC%8C%88%EB%B0%A5%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백종원의쌈밥', '고추장/간장대패제육', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F13%EC%8C%88%EB%B0%A505%EA%B3%A0%EC%B6%94%EC%9E%A5%EA%B0%84%EC%9E%A5%EB%8C%80%ED%8C%A8%EC%A0%9C%EC%9C%A1.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '본가', '우삼겹', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F14%EB%B3%B8%EA%B0%8001%EC%9A%B0%EC%82%BC%EA%B2%B9.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '본가', 'LA양념갈비', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F14%EB%B3%B8%EA%B0%8002LA%EC%96%91%EB%85%90%EA%B0%88%EB%B9%84.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '본가', '본가모둠', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F14%EB%B3%B8%EA%B0%8003%EB%B3%B8%EA%B0%80%EB%AA%A8%EB%91%A0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '본가', '우삼겹정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F14%EB%B3%B8%EA%B0%8004%EC%9A%B0%EC%82%BC%EA%B2%B9%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '본가', '본가비빔밥', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F14%EB%B3%B8%EA%B0%8005%EB%B3%B8%EA%B0%80%EB%B9%84%EB%B9%94%EB%B0%A5.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '인생설렁탕', '설렁탕', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F15%EC%9D%B8%EC%83%9D%EC%84%A4%EB%A0%81%ED%83%9501%EC%84%A4%EB%A0%81%ED%83%95.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '인생설렁탕', '순대국', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F15%EC%9D%B8%EC%83%9D%EC%84%A4%EB%A0%81%ED%83%9502%EC%88%9C%EB%8C%80%EA%B5%AD.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '인생설렁탕', '직화제육볶음', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F15%EC%9D%B8%EC%83%9D%EC%84%A4%EB%A0%81%ED%83%9503%EC%A7%81%ED%99%94%EC%A0%9C%EC%9C%A1%EB%B3%B6%EC%9D%8C.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '인생설렁탕', '직화스지정식', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F15%EC%9D%B8%EC%83%9D%EC%84%A4%EB%A0%81%ED%83%9504%EC%A7%81%ED%99%94%EC%8A%A4%EC%A7%80%EC%A0%95%EC%8B%9D.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '인생설렁탕', '직화소불고기&냉면세트', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F15%EC%9D%B8%EC%83%9D%EC%84%A4%EB%A0%81%ED%83%9505%EC%A7%81%ED%99%94%EC%86%8C%EB%B6%88%EA%B3%A0%EA%B8%B0%EB%83%89%EB%A9%B4%EC%84%B8%ED%8A%B8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '막이오름', '수육전골', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F16%EB%A7%89%EC%9D%B4%EC%98%A4%EB%A6%8401%EC%88%98%EC%9C%A1%EC%A0%84%EA%B3%A8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '막이오름', '우대창전골', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F16%EB%A7%89%EC%9D%B4%EC%98%A4%EB%A6%8402%EC%9A%B0%EB%8C%80%EC%B0%BD%EC%A0%84%EA%B3%A8.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '막이오름', '크림바지락술찜', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F16%EB%A7%89%EC%9D%B4%EC%98%A4%EB%A6%8403%ED%81%AC%EB%A6%BC%EB%B0%94%EC%A7%80%EB%9D%BD%EC%88%A0%EC%B0%9C.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '막이오름', '눈꽃베이컨감자전', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F16%EB%A7%89%EC%9D%B4%EC%98%A4%EB%A6%8404%EB%88%88%EA%BD%83%EB%B2%A0%EC%9D%B4%EC%BB%A8%EA%B0%90%EC%9E%90%EC%A0%84.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '막이오름', '빽햄김치전', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F16%EB%A7%89%EC%9D%B4%EC%98%A4%EB%A6%8405%EB%B9%BD%ED%96%84%EA%B9%80%EC%B9%98%EC%A0%84.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '연돈볼카츠', '연돈볼카츠', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F17%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A001%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '연돈볼카츠', '치즈볼카츠', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F17%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A002%EC%B9%98%EC%A6%88%EB%B3%BC%EC%B9%B4%EC%B8%A0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '연돈볼카츠', '청양볼카츠', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F17%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A003%EC%B2%AD%EC%96%91%EB%B3%BC%EC%B9%B4%EC%B8%A0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '연돈볼카츠', '볼카츠샌드', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F17%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A004%EB%B3%BC%EC%B9%B4%EC%B8%A0%EC%83%8C%EB%93%9C.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '연돈볼카츠', '트리플볼카츠박스', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F17%EC%97%B0%EB%8F%88%EB%B3%BC%EC%B9%B4%EC%B8%A005%ED%8A%B8%EB%A6%AC%ED%94%8C%EB%B3%BC%EC%B9%B4%EC%B8%A0%EB%B0%95%EC%8A%A4.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '돌배기집', '돌배기사합', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F18%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%A7%9101%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%82%AC%ED%95%A9.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '돌배기집', '해물삼합', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F18%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%A7%9102%ED%95%B4%EB%AC%BC%EC%82%BC%ED%95%A9.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '돌배기집', '프라임모둠', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F18%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%A7%9103%ED%94%84%EB%9D%BC%EC%9E%84%EB%AA%A8%EB%91%A0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '돌배기집', '돌배기', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F18%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%A7%9104%EB%8F%8C%EB%B0%B0%EA%B8%B0.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '돌배기집', '돌배기대창찌개', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F18%EB%8F%8C%EB%B0%B0%EA%B8%B0%EC%A7%9105%EB%8F%8C%EB%B0%B0%EA%B8%B0%EB%8C%80%EC%B0%BD%EC%B0%8C%EA%B0%9C.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '미정국수', '멸치국수', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F19%EB%AF%B8%EC%A0%95%EA%B5%AD%EC%88%9801%EB%A9%B8%EC%B9%98%EA%B5%AD%EC%88%98.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '미정국수', '만두국수', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F19%EB%AF%B8%EC%A0%95%EA%B5%AD%EC%88%9802%EB%A7%8C%EB%91%90%EA%B5%AD%EC%88%98.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '미정국수', '간비국수', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F19%EB%AF%B8%EC%A0%95%EA%B5%AD%EC%88%9803%EA%B0%84%EB%B9%84%EA%B5%AD%EC%88%98.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '미정국수', '김치제육덮밥', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F19%EB%AF%B8%EC%A0%95%EA%B5%AD%EC%88%9804%EA%B9%80%EC%B9%98%EC%A0%9C%EC%9C%A1%EB%8D%AE%EB%B0%A5.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '미정국수', '쫀득해만두', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F19%EB%AF%B8%EC%A0%95%EA%B5%AD%EC%88%9805%EC%AB%80%EB%93%9D%ED%95%B4%EB%A7%8C%EB%91%90.jpg?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백철판', '매운철판닭갈비', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F20%EB%B0%B1%EC%B2%A0%ED%8C%9001%EB%A7%A4%EC%9A%B4%EC%B2%A0%ED%8C%90%EB%8B%AD%EA%B0%88%EB%B9%84.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백철판', '쭈삼철판볶음', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F20%EB%B0%B1%EC%B2%A0%ED%8C%9002%EC%AD%88%EC%82%BC%EC%B2%A0%ED%8C%90%EB%B3%B6%EC%9D%8C.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백철판', '우삼겹철판볶음', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F20%EB%B0%B1%EC%B2%A0%ED%8C%9003%EC%9A%B0%EC%82%BC%EA%B2%B9%EC%B2%A0%ED%8C%90%EB%B3%B6%EC%9D%8C.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백철판', '우주떡볶이', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F20%EB%B0%B1%EC%B2%A0%ED%8C%9004%EC%9A%B0%EC%A3%BC%EB%96%A1%EB%B3%B6%EC%9D%B4.png?alt=media');

INSERT INTO MENU_TB (MENU_NO, BRAND_NAME, MENU_NAME, MENU_IMG)
VALUES (MENU_NO_SEQ.NEXTVAL, '백철판', '비빔막국수', 'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F%EB%A9%94%EB%89%B4%EC%82%AC%EC%A7%84%2F20%EB%B0%B1%EC%B2%A0%ED%8C%9005%EB%B9%84%EB%B9%94%EB%A7%89%EA%B5%AD%EC%88%98.png?alt=media');


-- MENU 테스트용 쿼리문

SELECT * FROM MENU_TB;						/* 전체 데이터 조회 */

DELETE FROM MENU_TB WHERE BRAND_NAME = ; 	/* 브랜드 단위로 데이터 삭제 */

DROP SEQUENCE MENU_NO_SEQ; 					/* MENU_NO 시퀀스 삭제*/

DROP TABLE MENU_TB;							/* MENU 테이블 삭제 */

COMMIT;
