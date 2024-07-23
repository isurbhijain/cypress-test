export default class ConfirmPage {
  assertConfirm() {
    cy.contains("successfully")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.contain("successfully");
      });
  }
  clickContinue() {
    cy.get(".button-2").click();
  }
}
