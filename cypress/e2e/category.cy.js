import { mainPage } from "../support/pageObjects/mainPage";
describe("tests", () => {
  it.only("click apparel & accessories tab", () => {
    mainPage.openMainPage();
    cy.get("#categorymenu")
      .contains("Apparel & accessories")
      .click({ force: true });
    cy.contains("Shoes").click({ force: true });
  });

  it.only("change currency and klick body and shower", () => {
    mainPage.openMainPage();
    mainPage.changeCurrency("€ Euro");
    mainPage.changeCurrency("£ Pound Sterling");
    mainPage.changeCurrency("$ US Dollar");
    cy.get(".subnav")
      .find('[href*="category&path=58"]', { force: true })
      .realHover()
      .contains("Body & Shower")
      .click();
  });
});
