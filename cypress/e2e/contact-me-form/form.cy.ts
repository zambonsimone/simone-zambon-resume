import { PATHS } from "../../../src/routes/paths";
import { GetCaptchaChallenge, GetCaptchaChallengeError, SendMail, VerifyCaptcha } from "../../interceptors/interceptors";
import { verifyCaptcha } from "./utils";

describe("#Contact Me form", () => {
  beforeEach(() => {
    SendMail.intercept();
  })

  it("should send mail correctly", () => {
    GetCaptchaChallenge.intercept();
    VerifyCaptcha.intercept(true);
    cy.visit(PATHS.CONTACTS);
    cy.wait(GetCaptchaChallenge.waitingName);
    cy.get("input[name='captcha']")
      .should("be.visible");
    cy.get("[data-testid='captcha-img']")
      .should("be.visible");
    cy.get("input[name='email']")
      .type("test@test.com")
    cy.get("input[name='privacy']")
      .click();

    cy.get("[data-testid*='submit-btn']")
      .should("have.attr", "disabled");

    verifyCaptcha(true);
    cy.wait(VerifyCaptcha.waitingName);
    cy.get("[data-testid*='submit-btn']")
      .should("not.have.attr", "disabled")
    cy.get("[data-testid*='submit-btn']")
      .click();
    cy.wait(SendMail.waitingName).then(xhr => {
      const reqBody = xhr.request.body;
      console.log(JSON.stringify(reqBody));
      expect(reqBody).to.deep.equal({ email: "test@test.com", privacy: true })
    })
  })

  it("should show validation errors on blank required fields", () => {
    GetCaptchaChallenge.intercept();
    VerifyCaptcha.intercept(true);
    cy.visit(PATHS.CONTACTS);
    cy.wait(GetCaptchaChallenge.waitingName);
    verifyCaptcha(true);
    cy.get("[data-testid*='submit-btn']")
      .click();
    cy.get("input[name='email']")
      .parents("[class*='_fieldWrapper__']")
      .within(field => {
        cy.wrap(field).should(field => expect(field[0].className.match(/error/)))
      })
    cy.get("#email-field-error").should("be.visible")
    cy.get("input[name='privacy']")
      .parents("[class*='_fieldWrapper__']")
      .within(field => {
        cy.wrap(field).should(field => expect(field[0].className.match(/error/)))
      })
    cy.get("#privacy-field-error").should("be.visible")
  })

  it("should set form valid if captcha challenge fetch fails", () => {
    GetCaptchaChallengeError.intercept();
    cy.visit(PATHS.CONTACTS);
    cy.wait(GetCaptchaChallengeError.waitingName);
    cy.get("[data-testid*='submit-btn']")
      .should("not.have.attr", "disabled")
  })
})