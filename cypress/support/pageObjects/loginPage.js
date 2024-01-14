import { loginSelectors } from "../selectors";

export class Login {
  fillLoginInputs(user, pass) {
    cy.get(loginSelectors.inputLoginName).type(user);
    cy.get(loginSelectors.inputPassword).type(pass);
    cy.get(loginSelectors.buttonLogin);
  }
  clickLoginButton() {
    cy.get(loginSelectors.buttonLogin).click();
  }
  assertIsUserLoggedCorretly() {
    cy.url().should("contain", "account/account");
  }
  assertInvalidLogin() {
    cy.get(loginSelectors.alertDanger).should(
      "contain.text",
      "Error: Incorrect login or password provided."
    );
  }
}

export const login = new Login();
