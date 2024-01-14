describe("Visit & Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
    // cy.xpath('//*[@id="customer_menu_top"]/li/a').click()
  });
  it("visit login url", () => {
    cy.url().then((url) => {
      cy.log(`The url is ${url}`);
      expect(url).to.contain("/");
      // cy.xpath("")
    });
  });
  it("Scroll to the bottom of the page", () => {
    cy.scrollTo("bottom");
  });
  it("Scroll to the top of the page", () => {
    cy.scrollTo("top");
  });
  it("Mouseover on the 'Login or register' menu", () => {
    cy.get("span.menu_text").trigger("mouseover");
    // cy.get("#customer_menu_top").should("be.visible");
  });
});
