interface ICyInterceptor<T extends string> {
    intercept: (...args: unknown[]) => Cypress.Chainable,
    waitingName: `@${T}`
}

export const GetCaptchaChallenge: ICyInterceptor<"GetCaptchaChallenge"> = {
    intercept: () => 
      cy.fixture("/challenge.json").then(data => 
        cy.intercept("/api/get-captcha-challenge", data).as("GetCaptchaChallenge")
      )
    ,
    waitingName: "@GetCaptchaChallenge"
}

export const GetCaptchaChallengeError: ICyInterceptor<"GetCaptchaChallenge"> = {
    intercept: () => cy.intercept("/api/get-captcha-challenge", {
      statusCode: 500
    }).as("GetCaptchaChallenge"),
    waitingName: "@GetCaptchaChallenge"
}
  
export const VerifyCaptcha: ICyInterceptor<"VerifyCaptcha"> = {
    intercept: (result: boolean) =>
      cy.intercept("POST", "/api/verify-captcha", {
        statusCode: 200,
        body: result
      }).as("VerifyCaptcha")
    ,
    waitingName: "@VerifyCaptcha"
}
  
export const SendMail: ICyInterceptor<"SendMail"> = {
    intercept: () => cy.intercept("/api/send-mail", {}).as("SendMail"),
    waitingName: "@SendMail"
}