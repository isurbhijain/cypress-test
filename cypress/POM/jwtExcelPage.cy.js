export default class JWTexcel {
  clickExcelButton() {
    cy.get("button.btn-primary").contains("Excel").click();
  }

  clickCSVButton() {
    cy.get("button.btn-primary").contains("CSV").click();
  }
}
