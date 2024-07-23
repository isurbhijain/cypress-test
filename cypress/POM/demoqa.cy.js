export default class DemoQa {
  addWebtableDetails() {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type("johndoe@example.com");
    cy.get("#age").type(25);
    cy.get("#salary").type(22000);
    cy.get("#department").type("Finance");
    cy.get("#submit").click();
  }
  navigateToWebtables() {
    cy.get(".category-cards").contains("Elements").click();
    cy.get("#item-3").click();
  }

  assesrtText() {
    cy.get(".rt-tr > div").should("contain.text", "John");
  }
}
