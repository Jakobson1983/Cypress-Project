import { mainPage } from "../support/pageObjects/mainPage";
import { login } from "../support/pageObjects/loginPage"

describe("Login tests", () => {
  beforeEach(() => {
    mainPage.openMainPage();
    mainPage.clickLoginOrRegisterButton();
  });

  it("Correct login", () => {
    login.fillLoginInputs("Jakobson1983", "1234OKi");
    login.clickLoginButton();
    login.assertIsUserLoggedCorretly();
  });

  it("Incorrect login", () => {
    login.fillLoginInputs("fail", "fail");
    login.clickLoginButton();
    login.assertInvalidLogin();
  });

});
