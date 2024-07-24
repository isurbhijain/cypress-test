export default class AMZHomePage {
  static locators = {
    searchBar: "#twotabsearchtextbox",
    productSuggestion: ".s-suggestion-container > .s-suggestion",
  };

  static enterSearchBar(text) {
    cy.get(this.locators.searchBar).type(text, { timeout: 5000 });
  }
  static selectTheProduct() {
    cy.get(this.locators.productSuggestion)
      .contains("laptops")
      .should("be.visible")
      .click({ force: true });
    // using force true because the elements is getting detached from the dom
  }
}
