export default class AMZProductListPage {
  selectProduct(name) {
    cy.get(".a-size-mini > .a-link-normal > span")
      .contains(name)
      .then((el) => {
        cy.wrap(el).parent().invoke("removeAttr", "target").click();
      });
  }

  changeLanguage(hindi) {
    cy.get("#icp-nav-flyout").trigger("mouseover");
    cy.get(".nav-link > .nav-text > span").contains("HI").click();
    cy.get(".hm-icon-label").should("have.text", hindi);
    // cy.get("#icp-nav-flyout").trigger("mouseover");
    // cy.get(".nav-link > .nav-text > span", { timeout: 3000 })
    //   .contains("EN")
    //   .click();
  }

  goToCart() {
    cy.get("#nav-cart").click();
  }
}
