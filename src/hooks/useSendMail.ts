import { useCallback, useState } from "react";
import { FormDataDto } from "../api/models";
import { sendFormDataAsMail } from "../api/services";

export function useSendMail() {
    const [isLoading, setIsLoading] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");

    const sendMail = useCallback(async (formData: FormDataDto) => {
        setIsLoading(true);
        const { message } = await sendFormDataAsMail(formData);
        setIsLoading(false);
        setConfirmMessage(message);
    },[])

    return {
        sendMail,
        isLoading,
        confirmMessage
    }
}