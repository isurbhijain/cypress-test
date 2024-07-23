export default class AMZHomePage {
  enterSearchBar(text) {
    cy.get("#twotabsearchtextbox").type(text);
  }
  selectTheProduct() {
    cy.get(".s-suggestion-container > .s-suggestion").contains("12").click();
  }
}
