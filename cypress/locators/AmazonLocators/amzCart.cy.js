export default class AMZCartPage {
  static locators = {
    cartProduct: ".a-truncate-cut",
    assertText: "Lenovo IdeaPad",
  };

  static getCartText() {
    cy.get(this.locators.cartProduct, { timeout: 10000 })
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.include(this.locators.assertText);
      });
  }
}
