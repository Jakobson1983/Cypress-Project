import { mainPageSelectors } from "../selectors";

export class MainPage {
  openMainPage() {
    cy.visit("https://automationteststore.com");
    cy.title().should("eq", "A place to practice your automation skills!");
  }
  clickLoginOrRegisterButton() {
    cy.get(mainPageSelectors.buttonLoginOrRegister).click();
    cy.contains("Returning Customer").should("be.visible");
  }
  changeCurrency(currecny) {
    cy.get(mainPageSelectors.dropdownCurrecny)
    .contains(" US Dollar")
    cy.contains(currecny).click({force: true});
  }
}

export const mainPage = new MainPage();
