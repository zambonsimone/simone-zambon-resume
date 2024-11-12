import React, { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { sendMail } from "../../../api/endpoints";
import { IAttachment } from "../../../api/models";
import { Form, FormModel } from "../../common/form/Form";
import { GRecaptcha } from "../../common/form/input/g-recaptcha/GRecaptcha";
import { Plus } from "../../symbols/Symbols";
import { CharsCounter } from "./CharsCounter";
import { MESSAGE_MAX_CHARS } from "./constants";
import style from "./ContactMe.module.scss";
import { schema } from "./ContactMeFormModel";
import { CONTACT_ME_FORM } from "./labels";

const {
    FULLNAME,
    ATTACHMENT,
    EMAIL,
    EMAIL_COPY,
    MESSAGE,
    PHONE_NUMBER,
    PHONE_PREFIX,
    SUBMIT
} = CONTACT_ME_FORM;

export const ContactMeForm: React.FC = () => {
    const [messageCharsCount, setMessageCharsCount] = useState(0);
    const [attachment, setAttachment] = useState<IAttachment>();
    const [recaptchaVerified, setRecaptchaVerified] = useState(false);

    const onChange = useCallback((value: string) => {
        setMessageCharsCount(value.length);
    },[])

    const onFileChange = useCallback((value: FileList) => {
        const file = value[0];
        const reader = new FileReader();
        reader.addEventListener("load", (event: ProgressEvent<FileReader>) => {
            setAttachment({
                content: (event.target.result as string).split(",")[1],
                name: file.name,
            });
        });
        reader.readAsDataURL(file);
    },[])

    const onSubmit: SubmitHandler<FormModel> = useCallback(async (formData: FormModel) => { 
        const phoneNumber = formData?.phoneNumber ? `+${formData.phoneNumber}` : undefined   
        sendMail({ ...formData, phoneNumber, attachment });
    },[attachment]);

    return (
        <Form 
            validationSchema={schema} 
            className={style.contactMeForm} 
            onSubmit={onSubmit}
        >
            {(Field, SubmitBtn) => {
                return (
                    <>
                        <Field
                            name="fullname"
                            placeholder={FULLNAME.PLACEHOLDER}
                            label={FULLNAME.LABEL}
                            type="text"
                        />
                        <Field
                            name="email"
                            inputMode="email"
                            placeholder={EMAIL.PLACEHOLDER}
                            label={EMAIL.LABEL}
                            type="text"
                        />
                        <Field 
                            name="emailCopy"
                            inputMode="email"
                            placeholder={EMAIL_COPY.PLACEHOLDER}
                            label={EMAIL_COPY.LABEL}
                            type="text"
                        />
                        <div className={style.phoneDataRow}>
                            <Field
                                name="phonePrefix"
                                placeholder={PHONE_PREFIX.PLACEHOLDER}
                                maxlength={7}
                                label={PHONE_PREFIX.LABEL}
                                type="text"
                                inputMode="numeric"
                                className={style.fieldContainer}
                                appendBefore={<Plus className={style.plus}/>}
                            />
                            <Field
                                name="phoneNumber"
                                inputMode="tel"
                                placeholder={PHONE_NUMBER.PLACEHOLDER}
                                label={PHONE_NUMBER.LABEL}
                                type="number"   
                                className={style.fieldContainer}                      
                            />
                        </div>
                        <Field
                            name="attachment"
                            placeholder={ATTACHMENT.PLACEHOLDER}
                            label={ATTACHMENT.LABEL}
                            type="file"
                            onChange={onFileChange}
                        />
                        <Field
                            name="message"
                            placeholder={MESSAGE.PLACEHOLDER}
                            label={(
                                <>
                                    {MESSAGE.LABEL}
                                    <CharsCounter charsCount={messageCharsCount} maxCharsCount={MESSAGE_MAX_CHARS}/>
                                </>
                            )}
                            type="textarea"
                            className={style.messageFieldContainer}
                            onChange={onChange}
                        />
                        <GRecaptcha onVerify={(value) => setRecaptchaVerified(value)}/>
                        <SubmitBtn label={SUBMIT.LABEL} disabled={!recaptchaVerified}/>
                    </>
                )
            }}
        </Form>
    )
}