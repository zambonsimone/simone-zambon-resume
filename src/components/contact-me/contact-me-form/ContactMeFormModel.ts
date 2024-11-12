import * as Yup from "yup";
import { MESSAGE_MAX_CHARS, PHONE_MAX_DIGITS, PHONE_MIN_DIGITS } from "./constants";
import { CONTACT_ME_FORM } from "./labels";
import { EMAIL_FORMAT_REGEX, PHONE_PREFIX_REGEX } from "./regexes";
import { isValidFileType } from "./utils";

const { ERRORS } = CONTACT_ME_FORM;

export const schema = Yup.object({
    fullname: Yup.string(),
    email: Yup.string()
        .required(ERRORS.REQUIRED_ERROR_MSG)
        .matches(EMAIL_FORMAT_REGEX, ERRORS.EMAIL_FORMAT_ERROR_MSG),
    emailCopy: Yup.string()
        .when({
            is: (emailCopy: string) => !emailCopy,
            then: schema => schema.notRequired(),
            otherwise: schema => schema.matches(EMAIL_FORMAT_REGEX, ERRORS.EMAIL_FORMAT_ERROR_MSG)
        }),
    phonePrefix: Yup.string()
        .when({
            is: (phonePrefix: string) => !phonePrefix,
            then: schema => schema.notRequired(),
            otherwise: schema => schema.matches(PHONE_PREFIX_REGEX, ERRORS.PHONE_PREFIX_FORMAT_ERROR)
        }),
    phoneNumber: Yup.string()
        .when({
            is: (phoneNumber: string) => !phoneNumber,
            then: schema => schema.notRequired(),
            otherwise: schema => schema
                .min(PHONE_MIN_DIGITS, ERRORS.PHONE_NUMBER_TOO_SHORT) 
                .max(PHONE_MAX_DIGITS, ERRORS.PHONE_NUMBER_TOO_LONG),
        }),
    message: Yup.string()
        .max(MESSAGE_MAX_CHARS, ERRORS.MESSAGE_TOO_LONG),
    attachment: Yup.mixed<FileList>()
        .nullable()
        .test("isValidFile", ERRORS.FILE_TYPE_ERROR_MSG, isValidFileType)
});
export type IContactFormModel = Yup.InferType<typeof schema>;