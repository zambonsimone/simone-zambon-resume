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
    const { i18n, t } = useTranslation("global");
    const { onChange, errorMsg } = useVerifyCaptcha();
    const onRecaptchaChange = useCallback(async () => {
        const { isError } = await onChange(recaptchaRef.current);
        onVerify(!isError);
    }, [onChange, onVerify])

    return (
        <div className={formStyle.fieldContainer} role="presentation">
            <ReCaptcha
                key={`grecaptcha-${i18n.resolvedLanguage}`}
                sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                ref={recaptchaRef}
                onChange={onRecaptchaChange}
                className={recaptchaStyle.recaptcha}
                hl={i18n.resolvedLanguage}
                aria-label={t("RECAPTCHA_LABEL")}
                role="checkbox"
                aria-invalid={!!errorMsg}
                aria-describedby="recaptcha-error"
            />
            {!!errorMsg && (
                <span id="recaptcha-error" className={formStyle.fieldError} role="alert" aria-live="assertive">
                    {errorMsg}
                </span>
            )}
        </div>

    )
}