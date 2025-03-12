import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useEnterToClick } from "../../../../../hooks/useEnterToClick/useEnterToClick";
import { useVerifyCaptcha } from "../../../../../hooks/useVerifyRecaptcha/useVerifyCaptcha";
import { Button } from "../../../button/generic/Button";
import { HtmlSanitizer } from "../../../html-sanitizer/HtmlSanitizer";
import { Icon } from "../../../icons/Icon";
import { FieldError } from "../../FormField";
import style from "./Captcha.module.scss";

interface ICaptchaProps {
    onVerify: (value: boolean) => void;
}
export const Captcha: React.FC<ICaptchaProps> = ({ onVerify }) => {
    const { t } = useTranslation("global");
    const [answer, setAnswer] = useState("");
    const {
        isVerifying,
        isValid,
        challenge,
        message,
        verifyCaptcha,
        reloadChallenge
    } = useVerifyCaptcha();
    const triggerClick = useEnterToClick({ onClick: () => verifyCaptcha(answer)});

    useEffect(() => {
        if (isValid) onVerify(true);
    }, [isValid, onVerify])

    return challenge && (
        <div
            className={[style.captcha, isValid ? style.validated : ""].join(" ")}
        >
            <div className={style.header}>
                <span id={"captcha-title"} aria-hidden>{t("CAPTCHA.TITLE")}</span>
                <Icon
                    icon={"reload"}
                    className={style.reloadIcon}
                    onClick={reloadChallenge}
                    aria-label="reload captcha challenge"
                    button
                />
            </div>
            <div className={style.challengeContainer}>
                <input
                    type="text"
                    value={answer}
                    onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setAnswer(evt.target.value)}
                    name={"captcha"}
                    id={"captcha"}
                    aria-labelledby="captcha-title"
                    onKeyDown={triggerClick}
                />
                <HtmlSanitizer data-testid={"captcha-img"} htmlString={challenge.data} />
            </div>
            <div className={style.sendSolution}>
                <Button
                    text={t("CAPTCHA.VERIFY")}
                    onClick={() => verifyCaptcha(answer)}
                    dataTestId="captcha-verify-btn"
                    loading={isVerifying}
                />
                {isValid === true && (
                    <>
                        <Icon icon={"checkCircle"} className={[style.resultIcon, style.valid].join(" ")} />
                        <span>{message}</span>
                    </>
                )}
                {isValid === false && <FieldError error={message} name={"captcha"} />}
            </div>
        </div>
    )
}