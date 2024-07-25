export default class AMZProductPage {
  static locators = {
    productTitle: "#title > #productTitle",
    addToCart: "#twisterPlusPriceSubtotalWWDesktop_feature_div+div>div>span",
    atcassert: ".a-size-medium-plus",
    tryAgain: "a > #attach-string-cart-try-again",
  };

  static assertProduct(name) {
    cy.get(this.locators.productTitle)
      .should("contain", name)
      .invoke("text")
      .then((text) => {
        Cypress.env("pname", text.trim());
      });
  }

  static addToCart() {
    cy.get(this.locators.addToCart).click();
    cy.get(this.locators.tryAgain, { timeout: 50000 }).click({ force: true });
  }
}
