import { useCallback, useRef } from "react";
import ReCaptcha from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { useVerifyCaptcha } from "../../../../../hooks/useVerifyRecaptcha/useVerifyCaptcha";
import formStyle from "../../Form.module.scss";
import recaptchaStyle from "./GRecaptcha.module.scss";

interface IGRecaptchaProps {
    onVerify: (value: boolean) => void;
}
export const Recaptcha: React.FC<IGRecaptchaProps> = ({
    onVerify
}) => {
    const recaptchaRef = useRef<ReCaptcha>();
    const { i18n } = useTranslation();
    const { onChange, errorMsg } = useVerifyCaptcha();
    const onRecaptchaChange = useCallback(async () => {
        const { isError } = await onChange(recaptchaRef.current);
        onVerify(!isError);
    }, [onChange, onVerify])

    return (
        <div className={formStyle.fieldContainer}>
            <ReCaptcha
                key={`grecaptcha-${i18n.resolvedLanguage}`}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={onRecaptchaChange}
                className={recaptchaStyle.recaptcha}
                hl={i18n.resolvedLanguage}
            />
            <span className={formStyle.fieldError}>
                {errorMsg}
            </span>
        </div>

    )
}