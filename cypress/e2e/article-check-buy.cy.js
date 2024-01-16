import { mainPage } from "../support/pageObjects/mainPage";
import { login } from "../support/pageObjects/loginPage";
import { checkArticle } from "../support/pageObjects/checkPage";


describe("Check and Buy Article", () => {
  beforeEach(() => {
    mainPage.openMainPage();
    mainPage.clickLoginOrRegisterButton();
    login.fillLoginInputs("Jakobson1983", "1234OKi");
    login.clickLoginButton();
  });

  it("Button check", () => {
    //  checkArticle.buttonMen();
    // cy.get('#categorymenu > nav > ul > li.current > a').trigger('mouseover');
    // cy.get('#categorymenu > nav > ul > li.current > ul > li:nth-child(1) > a').click();
    // cy.get('//*[@id="categorymenu"]/nav/ul/li[6]/a');
  });
});