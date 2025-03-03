import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useVerifyCaptcha } from "../../../../../hooks/useVerifyRecaptcha/useVerifyCaptcha";
import { Button } from "../../../button/generic/Button";
import { HtmlSanitizer } from "../../../html-sanitizer/HtmlSanitizer";
import { Icon } from "../../../icons/Icon";
import { Loading } from "../../../loading/Loading";
import style from "./Captcha.module.scss";

interface ICaptchaProps {
    onVerify: (value: boolean) => void;
}
export const Captcha: React.FC<ICaptchaProps> = ({ onVerify }) => {
    const {t} = useTranslation("global");
    const [answer, setAnswer] = useState("");
    const {
        isVerifying,
        isValid,
        challenge,
        message,
        verifyCaptcha,
        reloadChallenge
    } = useVerifyCaptcha();

    useEffect(() => {
        if (isValid) onVerify(true);
    },[isValid, onVerify])

    return challenge && (
        <div className={[style.captcha, isValid ? style.validated : ""].join(" ")}>
            <div className={style.header}>
                <span>{t("CAPTCHA.TITLE")}</span>
                <Icon 
                    icon={"reload"} 
                    className={style.reloadIcon} 
                    onClick={reloadChallenge}
                />
            </div>
            <div className={style.challengeContainer}>
                <input type="text" value={answer} onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setAnswer(evt.target.value)}/>
                <HtmlSanitizer htmlString={challenge.data}/>
            </div>
            <div className={style.sendSolution}>
                <Button 
                    text={ isVerifying ? <Loading className={""}/> : t("CAPTCHA.VERIFY") } 
                    onClick={() => verifyCaptcha(answer)} 
                />
                { isValid === true && (
                    <Icon icon={"checkCircle"} className={[style.resultIcon, style.valid].join(" ")} /> 
                )}
                { isValid === false && (
                    <Icon icon={"alert"} className={[style.resultIcon, style.notValid].join(" ")} /> 
                )}
                <span>{message}</span>
            </div>
        </div>
    )
}