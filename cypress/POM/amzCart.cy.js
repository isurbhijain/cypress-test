export default class AMZCartPage {
  getCartText() {
    cy.get(".a-truncate-cut", { timeout: 10000 })
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).eq(Cypress.env("pname"));
      });
  }
}
