import React, { useCallback, useRef, useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import { verifyRecaptcha } from "../../../../../api/endpoints";
import formStyle from "../../Form.module.scss";
import recaptchaStyle from "./GRecaptcha.module.scss";

interface IGRecaptchaProps {
    onVerify: (value: boolean) => void;
}
export const GRecaptcha: React.FC<IGRecaptchaProps> = ({ 
    onVerify
}) => {
    const [errorMsg, setErrorMsg] = useState("");
    const recaptchaRef = useRef<ReCaptcha>();
    const onRecaptchaChange = useCallback(async () => {
        const recaptcha = recaptchaRef.current.getValue();
        const { isError, message } = await verifyRecaptcha(recaptcha);
        onVerify(!isError);
        if (isError) setErrorMsg(message);
    },[onVerify])

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