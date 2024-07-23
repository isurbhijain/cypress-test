export default class LogoutPage {
  clickLogout() {
    cy.get(".ico-logout").click();
  }
  assertLogout(asText) {
    cy.get(".ico-login")
      .invoke("text")
      .then((text) => {
        cy.log(text);
        expect(text).to.eql(asText);
      });
  }
}
