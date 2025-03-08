import { InferType, boolean as YupBoolean, mixed as YupMixed, object as YupObject, string as YupString } from "yup";
import { EMAIL_FORMAT_REGEX, PHONE_PREFIX_REGEX } from "../../../utils/regexes";
import { MESSAGE_MAX_CHARS, PHONE_MAX_DIGITS, PHONE_MIN_DIGITS } from "./constants";
import { CONTACT_ME_FORM } from "./labels";
import { isValidFileType } from "./utils";

const { ERRORS } = CONTACT_ME_FORM;

export const schema = YupObject({
    fullname: YupString(),
    email: YupString()
        .required(ERRORS.REQUIRED_ERROR_MSG)
        .matches(EMAIL_FORMAT_REGEX, ERRORS.EMAIL_FORMAT_ERROR_MSG),
    emailCopy: YupString()
        .when({
            is: (emailCopy: string) => !emailCopy,
            then: schema => schema.notRequired(),
            otherwise: schema => schema.matches(EMAIL_FORMAT_REGEX, ERRORS.EMAIL_FORMAT_ERROR_MSG)
        }),
    phonePrefix: YupString()
        .when({
            is: (phonePrefix: string) => !phonePrefix,
            then: schema => schema.notRequired(),
            otherwise: schema => schema.matches(PHONE_PREFIX_REGEX, ERRORS.PHONE_PREFIX_FORMAT_ERROR)
        }),
    phoneNumber: YupString()
        .when({
            is: (phoneNumber: string) => !phoneNumber,
            then: schema => schema.notRequired(),
            otherwise: schema => schema
                .min(PHONE_MIN_DIGITS, ERRORS.PHONE_NUMBER_TOO_SHORT)
                .max(PHONE_MAX_DIGITS, ERRORS.PHONE_NUMBER_TOO_LONG),
        }),
    message: YupString()
        .max(MESSAGE_MAX_CHARS, ERRORS.MESSAGE_TOO_LONG),
    attachment: YupMixed<FileList>()
        .nullable()
        .test("isValidFile", ERRORS.FILE_TYPE_ERROR_MSG, isValidFileType),
    privacy: YupBoolean()
        .oneOf([true], ERRORS.REQUIRED_ERROR_MSG)

});
export type IContactFormModel = InferType<typeof schema>;