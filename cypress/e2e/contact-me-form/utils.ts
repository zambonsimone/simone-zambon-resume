import { VerifyCaptcha } from "../../interceptors/interceptors";

export function verifyCaptcha(result: boolean) {
    VerifyCaptcha.intercept(result);
    cy.get("input[name='captcha']")
      .type("test")
    cy.get("[data-testid='captcha-verify-btn']")
      .click();
}