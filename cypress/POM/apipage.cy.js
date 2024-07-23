export default class APIpage {
  clickGetLink() {
    cy.get("span.url").click();
  }

  demoGETLink() {
    cy.get("button[class='btn btn-primary']").click();
  }

  textAssert() {
    cy.get("p").should("have.text", "Oops only 1 Book available");
  }
  tableAssert(response) {
    cy.get("tr").should("have.length", response.body.length + 1);
  }
}
