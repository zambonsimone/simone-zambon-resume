import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ICaptchaChallenge, ICaptchaUserAnswer } from "../../api/models";
import { getCaptchaChallenge, testCaptcha } from "../../api/services";

export function useVerifyCaptcha() {
    const [challenge, setChallenge] = useState<ICaptchaChallenge>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);
    const {t} = useTranslation("messages");

    const getChallenge = useCallback(async () => {
        const result = await getCaptchaChallenge();
        if (result.isError === false) return setChallenge(result.response);
        setIsValid(true);
    },[])

    const verifyCaptcha = useCallback(async (answer: string) => {
        setLoading(true);
        const solution: ICaptchaUserAnswer = { answer, uid: challenge.uid };
        const result = await testCaptcha(solution);
        if (result.isError === false) setIsValid(result.response);
        else setIsValid(false)
        setMessage(t(result.message));
        setLoading(false);
    },[challenge?.uid, t])

    useEffect(() => {
        getChallenge();
    },[getChallenge])

    const reloadChallenge = useCallback(() => {
        getChallenge();
        setMessage("");
        setIsValid(null);
    },[getChallenge])

    return {
        isVerifying: loading,
        isValid,
        message,
        verifyCaptcha,
        challenge,
        reloadChallenge
    }
}