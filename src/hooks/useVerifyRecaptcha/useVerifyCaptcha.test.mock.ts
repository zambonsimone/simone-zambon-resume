import { ErrorResponse, ICaptchaChallenge, SuccessResponse } from "../../api/models";
import * as services from "../../api/services";

export const challengeObj: ICaptchaChallenge = { uid: "1", data: "img" };
export const challengeObj2: ICaptchaChallenge = { uid: "2", data: "img" };
export const successChallenge = new SuccessResponse<ICaptchaChallenge>({
    response: challengeObj,
    message: "test"
});
export const successChallenge2 = new SuccessResponse<ICaptchaChallenge>({
    response: challengeObj2,
    message: "test"
});
export const errorChallenge = new ErrorResponse({
    code: "ERR_BAD_REQUEST",
    statusCode: 400,
    message: "test"
});
export const spyOnGetCaptchaChallenge = jest.spyOn(services, "getCaptchaChallenge")

export const verifyCaptchaAnswer = "t3st";
export const verifySuccess = new SuccessResponse<boolean>({
    response: true,
    message: "test",
});
export const verifyFailed = new SuccessResponse<boolean>({
    response: false,
    message: "test",
});
export const spyOnVerifyCaptcha = jest.spyOn(services, "testCaptcha");