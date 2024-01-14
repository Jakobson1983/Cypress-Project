describe("Visit & Login Page", () => {
  beforeEach(() => {
    cy.visit("/index.php?rt=account/login");
  });
  it("visit login url", () => {
    cy.url().then((url) => {
      cy.log(`The url is ${url}`);
      expect(url).to.contain("/index.php?rt=account/login");
    });
  });
    it("login valid submit", () => {
      cy.login("Jakobson1983", "1234OKi");
      cy.get("span.subtext").should("contain", "Jakub");
    });
    // it("login invalid submit", () => {
    //   cy.login("XXX123abc", "xxx123");
      // nie wiem dlaczego xpath nie dziala
      // cy.xpath(`//div[@class="alert alert-error alert-danger"]`);
    // });
    // it("login invalid submit", () => {
    //   cy.login("XXX123abc", "xxx123");
    //   cy.get(".alert.alert-error.alert-danger").should("have.text", "Unknown error encountered. Please try again!");
    // });
    
 });

