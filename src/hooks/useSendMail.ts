import { useCallback, useState } from "react";
import { FormDataDto } from "../api/models";
import { sendFormDataAsMail } from "../api/services";

interface ISendMailConfirmMessage {
    text: string, 
    status: "error" | "success"
}

export function useSendMail() {
    const [isLoading, setIsLoading] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState<ISendMailConfirmMessage>();

    const sendMail = useCallback(async (formData: FormDataDto) => {
        setIsLoading(true);
        const { message, isError } = await sendFormDataAsMail(formData);
        setIsLoading(false);
        setConfirmMessage({ text: message, status: isError ? "error" : "success" });
    },[])

    return {
        sendMail,
        isLoading,
        confirmMessage
    }
}