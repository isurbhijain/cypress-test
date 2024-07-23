export default class CartPage {
  assertCartText() {
    cy.get(":nth-child(1) > .product > .product-name")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.contain("Laptop");
      });
    // cy.get(":nth-child(2) > .product > .product-name")
    //   .invoke("text")
    //   .then((text) => {
    //     cy.log(text);
    //     expect(text).to.contain("Computer");
    //   });
  }

  acceptTerms() {
    cy.get("#termsofservice").click();
  }
  proceedCheckout() {
    cy.get("#checkout").click();
  }
}
