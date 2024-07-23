export default class WDUwebtables {
  getTableText(name) {
    cy.get("#t02 > tbody > tr")
      .should("have.length", 4)
      .each((el, index) => {
        if (el.text().includes(name)) {
          cy.log(el.text());
          cy.log(el.length);
        }
      });
  }
}
