export default class HomePage {
  hoverComputer() {
    cy.get(".top-menu > :nth-child(2) > ul").invoke("show");
  }

  selectNotebooks() {
    cy.get(".top-menu > :nth-child(2) > .sublist > :nth-child(2) > a").click();
  }

  selctDesktops() {
    cy.get(".top-menu > :nth-child(2) > .sublist > :nth-child(1) > a").click();
  }
}
