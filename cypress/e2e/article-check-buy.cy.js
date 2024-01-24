import { mainPage } from "../support/pageObjects/mainPage";
import { login } from "../support/pageObjects/loginPage";
import { checkArticle } from "../support/pageObjects/checkPage";




describe("Check and Buy Article", () => {
  beforeEach(() => {
    mainPage.openMainPage();
    // mainPage.clickLoginOrRegisterButton();
    // login.fillLoginInputs("Jakobson1983", "1234OKi");
    // login.clickLoginButton();
  });

    // it("Button check", () => {
    //  checkArticle.buttonMen();
    // cy.get('#categorymenu > nav > ul > li.current > a').trigger('mouseover');
    // cy.get('#categorymenu > nav > ul > li.current > ul > li:nth-child(1) > a').click();
    // cy.get('//*[@id="categorymenu"]/nav/ul/li[6]/a');
    // cy.get('#categorymenu > nav > ul > li.current').contains('Men').trigger('mouseover');
  // });
  it("Change currency", () => {
    // cy.get("#categorymenu").contains("Men").invoke("show");
    // cy.get("#categorymenu").contains("Men").click();
    // cy.contains("Body & Shower");
    // cy.get(".current").contains("Body & Shower");
    cy.get("body > div > header > div.container-fluid > div > div.block_6 > ul > li > a").contains(" US Dollar").invoke("show");
    cy.contains("€ Euro").click({force: true});
  });
});