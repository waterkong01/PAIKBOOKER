import styled from "styled-components";
import PrivacyPolicyTxt from "./PrivacyPolicyTxt";
import { TxtBox } from "../../components/MemberDetailComponent";

const PrivacyPolicy = () => {
    return (
        <TxtBox>
            <h2>개인정보 보호정책</h2>
            <p>{PrivacyPolicyTxt}</p>
        </TxtBox>
    );
};

export default PrivacyPolicy;