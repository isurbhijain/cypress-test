import neatCsv from "neat-csv";
describe("demowebshop", () => {
  var res;
  before("fub", () => {
    cy.fixture("example").then((data) => {
      res = data;
    });
  });
  it("Home Page", () => {
    // cy.visit("https://demowebshop.tricentis.com/");
    // cy.get('.ico-cart > .cart-label').invoke('text').then((text)=>{
    //     cy.log(text)
    //     expect(text).to.eql("Shopping cart")
    // })
    // let regData;
    // cy.readFile(
    //   Cypress.config("fileServerFolder") +
    //     "/cypress/downloads/order-invoice_johndoe271.csv"
    // )
    //   .then(neatCsv)
    //   .then((data) => {
    //     regData = data;
    //     console.log(regData);
    //     const actualProductCSV = regData[0]["Product Name"];
    //     cy.log(actualProductCSV);
    //   });
  });
});
