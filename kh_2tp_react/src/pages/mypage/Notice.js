import { useState } from "react";
import styled from "styled-components";

const NoticeStyle = styled.div`
    border-radius: 50px;
    table {
        width: 100%;
        /* margin: auto; */
        border: 1px solid #000;
        border-radius: 10px;
        box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
        border-spacing: 15px;
        @media (max-width: 1405px) {
            margin-bottom: 3vw;
        }
    }
    th, td {
        padding: 10px;
        text-align: center;
        vertical-align: text-top;
    }
    .notice_content {
        position: relative;
        text-align: left;
        width: 73%;
    }
    .notice_details {
        padding: 15px 15px;
        border: 1px solid #ddd;
        margin-top: 10px;
        display: none; /* 처음에는 숨김 */
    }
    .expanded .notice_details {
        display: block; /* 클릭 시 내용 펼쳐짐 */
    }
    .notice_center {
        text-align: center;
    }
    button {
        font-size: 16px;
        border: none;
        padding: 5px 15px;
        background-color: #FFFFFF00;
        text-align: left;
    }
`

const Notice = () => {
    const notices = [
        {
            id: 3,
            title: '[ 더본코리아 ] 개인정보처리방침 개정 안내 (시행일:2024/12/18)',
            date: '24.12.11',
            views: 11,
            content: '항상 저희 서비스를 이용해주시는 이용자분들께 감사드리며, 개인정보 처리방침 개정 사항에 대해 사전 안내 말씀드립니다. 더본코리아 개인정보처리방침이 2024년 12월 18일 자로 변경될 예정입니다. 이용자 분들께서는 변경되는 개인정보처리방침의 내용을 확인해주시길 부탁드립니다.'
        },
        {
            id: 2,
            title: '신주발행 공고',
            date: '24.10.14',
            views: 816,
            content: '2024년 09월 04일 개최한 당사 이사회에서 유가증권시장 상장을 위하여 당사 정관 제10조에 따라 분할하여 일반공모증자 방식의 신주발행을 결의하였기에 상법 제418조 제4항에 의거 아래와 같이 공고합니다.'
        },
        {
            id: 1,
            title: '전자증권 전환 대상 주권 권리자(주주) 보호 및 조치사항 안내',
            date: '24.03.13',
            views: 1046,
            content: '2019. 9.16일 「주식·사채 등의 전자등록에 관한 법률(이하 “전자증권법”)」이 시행됨에 따라 당사의 전자증권 전환 대상 주권 권리자를 보호하기 위하여 전자증권법 제27조 1항에 근거하여 아래의 사항을 통지합니다.'
        },
    ];

    // 상태 변수로 펼쳐지는 공지사항을 관리
    const [expandedNoticeId, setExpandedNoticeId] = useState(null);

    // 공지사항 클릭 시 펼쳐지는 동작
    const handleToggle = (id) => {
        setExpandedNoticeId(expandedNoticeId === id ? null : id);
    };
    return (
        <NoticeStyle>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {notices.map((notice) => (
                        <tr key={notice.id} className={expandedNoticeId === notice.id ? 'expanded' : ''}>
                            <td>{notice.id}</td>
                            <td className="notice_content">
                                <button onClick={() => handleToggle(notice.id)}>
                                    {notice.title}
                                </button>
                                {expandedNoticeId === notice.id && (
                                    <div className="notice_details">
                                        <p>{notice.content}</p>
                                    </div>
                                )}
                            </td>
                            <td className="notice_center">{notice.date}</td>
                            <td className="notice_center">{notice.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </NoticeStyle>
    );
};

export default Notice;