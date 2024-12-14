import TermsAndConditionsTxt from "./TermsAndConditionsTxt";
import { TxtBox } from "../../components/MemberDetailComponent";

const TermsAndConditions = () => {
    return (
        <TxtBox>
            <h2>이용약관</h2>
            <p>{TermsAndConditionsTxt}</p>
        </TxtBox>
    );
};

export default TermsAndConditions;