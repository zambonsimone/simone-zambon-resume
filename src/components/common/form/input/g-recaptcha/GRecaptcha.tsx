import { useCallback, useRef } from "react";
import ReCaptcha from "react-google-recaptcha";
import { useVerifyCaptcha } from "../../../../../hooks/useVerifyCaptcha";
import formStyle from "../../Form.module.scss";
import recaptchaStyle from "./GRecaptcha.module.scss";

interface IGRecaptchaProps {
    onVerify: (value: boolean) => void;
}
export const GRecaptcha: React.FC<IGRecaptchaProps> = ({ 
    onVerify
}) => {
    const recaptchaRef = useRef<ReCaptcha>();
    const { onChange, errorMsg } = useVerifyCaptcha();
    const onRecaptchaChange = useCallback(async () => {
        const { isError } = await onChange(recaptchaRef.current);
        onVerify(!isError);
    },[onChange, onVerify])

    return (
        <div className={formStyle.fieldContainer}>
            <ReCaptcha
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={onRecaptchaChange}
                className={recaptchaStyle.recaptcha}
            />
            <span className={formStyle.fieldError}>
                {errorMsg}
            </span>
        </div>
        
    )
}