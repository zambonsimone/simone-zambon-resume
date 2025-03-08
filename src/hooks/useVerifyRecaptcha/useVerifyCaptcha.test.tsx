import { renderHook, waitFor } from "@testing-library/react";
import { useVerifyCaptcha } from "./useVerifyCaptcha";
import { challengeObj, challengeObj2, errorChallenge, spyOnGetCaptchaChallenge, spyOnVerifyCaptcha, successChallenge, successChallenge2, verifyCaptchaAnswer, verifyFailed, verifySuccess } from "./useVerifyCaptcha.test.mock";

describe("useVerifyCaptcha hook should", () => {
    it("fetch challenge on mount", async () => {
        spyOnGetCaptchaChallenge.mockResolvedValue(successChallenge);
        const { result } = renderHook(useVerifyCaptcha);

        //wait for state to be updated
        await waitFor(() => expect(result.current.challenge).toStrictEqual(challengeObj));
        expect(spyOnGetCaptchaChallenge).toHaveBeenCalled();
    })
    it("set valid if captcha fetch fails", async () => {
        spyOnGetCaptchaChallenge.mockResolvedValue(errorChallenge);
        const { result } = renderHook(useVerifyCaptcha);
        await waitFor(() => expect(result.current.challenge).toBeNull());
        expect(result.current.isValid).toBeTruthy();
    })
    it("verify captcha - success", async () => {
        spyOnGetCaptchaChallenge.mockResolvedValue(successChallenge);
        spyOnVerifyCaptcha.mockResolvedValue(verifySuccess);
        const { result } = renderHook(useVerifyCaptcha);
        await waitFor(() => expect(result.current.challenge).toStrictEqual(challengeObj));
        result.current.verifyCaptcha(verifyCaptchaAnswer);
        await waitFor(() => expect(result.current.isValid).toBeTruthy())
        expect(result.current.message).toBe("test");
    })
    it("verify captcha - fail or fetch error", async () => {
        spyOnGetCaptchaChallenge.mockResolvedValue(successChallenge);
        spyOnVerifyCaptcha.mockResolvedValue(verifyFailed);
        const { result } = renderHook(useVerifyCaptcha);
        await waitFor(() => expect(result.current.challenge).toStrictEqual(challengeObj));
        result.current.verifyCaptcha(verifyCaptchaAnswer);
        await waitFor(() => expect(result.current.isValid).toBeFalsy())
        expect(result.current.message).toBe("test");
    })
    it("reload challenge", async () => {
        spyOnGetCaptchaChallenge.mockResolvedValue(successChallenge);
        spyOnVerifyCaptcha.mockResolvedValue(verifySuccess);
        const { result } = renderHook(useVerifyCaptcha);
        await waitFor(() => expect(result.current.challenge).toStrictEqual(challengeObj));
        result.current.verifyCaptcha(verifyCaptchaAnswer);
        await waitFor(() => expect(result.current.isValid).toBeTruthy())
        expect(result.current.message).toBe("test");

        spyOnGetCaptchaChallenge.mockResolvedValue(successChallenge2);
        result.current.reloadChallenge();
        await waitFor(() => expect(result.current.challenge).toStrictEqual(challengeObj2))
        expect(result.current.message).toBeFalsy();
        expect(result.current.isValid).toBeNull();
    })
})