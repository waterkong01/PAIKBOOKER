import styled from "styled-components";
import PrivacyPolicyTxt from "./PrivacyPolicyTxt";

const TxtBox = styled.div`
    background-color: #F0F0F0;
    padding: 30px;
    border-radius: 30px;
    p { white-Space: pre-wrap; }
`

const PrivacyPolicy = () => {
    return (
        <TxtBox>
            <h2>개인정보 보호정책</h2>
            <p>{PrivacyPolicyTxt}</p>
        </TxtBox>
    );
};

export default PrivacyPolicy;