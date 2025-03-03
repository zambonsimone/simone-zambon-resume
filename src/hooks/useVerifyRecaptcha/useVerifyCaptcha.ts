import { useCallback, useEffect, useState } from "react";
import { ICaptchaChallenge, ICaptchaUserAnswer, SuccessResponse } from "../../api/models";
import { getCaptchaChallenge, testCaptcha } from "../../api/services";

export function useVerifyCaptcha() {
    const [challenge, setChallenge] = useState<ICaptchaChallenge>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const getChallenge = useCallback(async () => {
        const result = await getCaptchaChallenge();
        if (!result.isError) setChallenge((result as SuccessResponse<ICaptchaChallenge>).response);
        else setIsValid(true);
    },[])

    const verifyCaptcha = useCallback(async (answer: string) => {
        setLoading(true);
        const solution: ICaptchaUserAnswer = { answer, uid: challenge.uid };
        const result = await testCaptcha(solution);
        if (!result.isError) setIsValid((result as SuccessResponse<boolean>).response);
        setMessage(result.message);
        setLoading(false);
    },[challenge?.uid])

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