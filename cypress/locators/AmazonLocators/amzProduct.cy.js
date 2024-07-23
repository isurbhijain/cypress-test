export default class AMZProductPage {
  assertProduct(name) {
    cy.get("#title > #productTitle")
      .should("contain", name)
      .invoke("text")
      .then((text) => {
        Cypress.env("pname", text.trim());
        cy.log(text);
      });
  }

  addToCart() {
    cy.get(
      "#twisterPlusPriceSubtotalWWDesktop_feature_div+div>div>span"
    ).click();
  }
  // checkProduct() {
  //   cy.get("#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading", {
  //     timeout: 10000,
  //   }).should("contain", "Added to Cart");
  // }
}
