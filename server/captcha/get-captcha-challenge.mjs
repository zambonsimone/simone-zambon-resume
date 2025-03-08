import { ErrorResponse, SuccessResponse } from "../responses.mjs";
import { getRandomChallenge } from "./utils.mjs";

export function getCaptchaChallenge() {
    const result = getRandomChallenge();
    if (result.error) return new ErrorResponse(result.error);
    const { uid, data } = result;
    return new SuccessResponse({ response: { uid, data } })
}