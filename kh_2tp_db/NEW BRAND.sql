-- BRAND 테이블 생성
CREATE TABLE BRAND_TB(
	BRAND_NO INTEGER NOT NULL PRIMARY KEY, 							/* 브랜드번호 */
	BRAND_NAME VARCHAR2(20) NOT NULL, 								/* 브랜드명 */
    BRAND_OPEN VARCHAR2(20) NOT NULL, 								/* 영업시작시간 */
	BRAND_CLOSE VARCHAR2(20) NOT NULL,								/* 영업종료시간 */
	BRAND_FOOD VARCHAR2(20) NOT NULL,								/* 음식종류 */
	BRAND_LOGO1 VARCHAR2(500) NOT NULL,               			 	/* 브랜드 Logo 세로 이미지 URL */
	BRAND_LOGO2 VARCHAR2(500) NOT NULL,               			 	/* 브랜드 Logo 가로 이미지 URL */
	BRAND_MARKER VARCHAR2(500) NOT NULL,               				/* 브랜드 MARKER 세로 이미지 URL */
	BRAND_IMG1 VARCHAR2(500) NOT NULL,								/* 브랜드 지점 이미지 URL */
	BRAND_IMG2 VARCHAR2(500) NOT NULL,

	--UNIQUE 제약조건
	CONSTRAINT UNIQUE_BRAND1 UNIQUE (BRAND_NAME), 					/* MENU */
	CONSTRAINT UNIQUE_BRAND2 UNIQUE (BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2) 	/* STORE */
);


-- BRAND_NO 시퀀스 생성
CREATE SEQUENCE BRAND_NO_SEQ
INCREMENT BY 1
START WITH 1
NOCYCLE
NOCACHE;


-- BRAND 더미 데이터 생성
INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '빽보이피자', '11', '22', '양식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F01빽보이피자02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F01빽보이피자IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F01빽보이피자IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '역전우동', '11', '21', '일식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F02역전우동02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F02역전우동IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F02역전우동IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '빽다방', '07', '22', '커피',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F03빽다방02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_03.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F03빽다방IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F03빽다방IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '홍콩반점', '11', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F04홍콩반점02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_04.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F04홍콩반점IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F04홍콩반점IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '롤링파스타', '11', '21', '양식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F05롤링파스타02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_05.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F05롤링파스타IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F05롤링파스타IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '한신포차', '17', '27', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F06한신포차02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_06.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F06한신포차IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F06한신포차IMG원본.jpg?alt=media');


INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백스비어', '17', '25', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F07백스비어02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_07.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F07백스비어IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F07백스비어IMG원본.jpg?alt=media');


INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '새마을식당', '11', '23', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F08새마을식당02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_08.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F08새마을식당IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F08새마을식당IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '제순식당', '11', '19', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F09제순식당02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_09.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F09제순식당IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F09제순식당IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '리춘시장', '17', '24', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F10리춘시장02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_10.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F10리춘시장IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F10리춘시장IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '고투웍', '10', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F11고투웍02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_11.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F11고투웍IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F11고투웍IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '홍콩분식', '11', '21', '중식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F12홍콩분식02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_12.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F12홍콩분식IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F12홍콩분식IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백종원의쌈밥', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F13쌈밥02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_13.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F13쌈밥IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F13쌈밥IMG원본.JPG?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '본가', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F14본가02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_14.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F14본가IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F14본가IMG원본.png?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '인생설렁탕', '11', '22', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F15인생설렁탕02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_15.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F15인생설렁탕IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F15인생설렁탕IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '막이오름', '17', '26', '술',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F16막이오름02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_16.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F16막이오름IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F16막이오름IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '연돈볼카츠', '11', '22', '일식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F17연돈볼카츠02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_17.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F17연돈볼카츠IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F17연돈볼카츠IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '돌배기집', '08', '24', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F18돌배기집02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_18.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F18돌배기집IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F18돌배기집IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '미정국수', '08', '24', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F19미정국수02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_19.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F19미정국수IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F19미정국수IMG원본.jpg?alt=media');

INSERT INTO BRAND_TB (BRAND_NO, BRAND_NAME, BRAND_OPEN, BRAND_CLOSE, BRAND_FOOD, BRAND_LOGO1, BRAND_LOGO2, BRAND_MARKER, BRAND_IMG1, BRAND_IMG2)
VALUES (BRAND_NO_SEQ.NEXTVAL, '백철판', '11', '23', '한식',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판01.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2F20백철판02.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fmarker_20.png?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F20백철판IMG.jpg?alt=media',
'https://firebasestorage.googleapis.com/v0/b/kh-basic-frontend-react-f5a7b.firebasestorage.app/o/PAIKBOOKER%2Fbrandimage%2F20백철판IMG원본.jpg?alt=media');


-- BRAND 테스트용 쿼리문
SELECT * FROM BRAND_TB;							/*전체 데이터 조회*/

DELETE FROM BRAND_TB WHERE BRAND_NO = '';		/* 브랜드번호 단위로 데이터 삭제 */

DROP SEQUENCE BRAND_NO_SEQ;						/* BRAND_NO 시퀀스 삭제 */

DROP TABLE BRAND_TB;							/* BRAND 테이블 삭제 */

COMMIT;
