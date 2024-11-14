import { useCallback, useState } from "react";
import ReCaptcha from "react-google-recaptcha";
import { testRecaptcha } from "../api/services";

export function useVerifyCaptcha() {
    const [errorMsg, setErrorMsg] = useState("");

    const onChange = useCallback(async (recaptcha: ReCaptcha) => {
        const recaptchaValue = recaptcha.getValue();
        setErrorMsg("");
        const { isError, message } = await testRecaptcha(recaptchaValue);
        if (isError) {
            setErrorMsg(message);
            recaptcha.reset();
        }
        return { isError }
    },[])

    return {
        errorMsg,
        onChange
    }
}