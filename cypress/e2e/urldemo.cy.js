describe("Test Suite", function () {
  it("Testing Automation Practice", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.url().should("include", "rahulshetty");
    // FETCHING ATTRIBUTE VALUE
    cy.get("#opentab").then((ele) => {
      const url = ele.prop("href");
      cy.wrap(ele).invoke("removeAttr", "target").click();
      cy.origin(url, () => {
        cy.url().should("include", "qaclickacademy");
      });
    });
  });
});
