import APIpage from "../POM/apipage.cy";

describe("Practice mock", () => {
  it("test Mock", () => {
    cy.visit("https://reqres.in/");

    cy.intercept("GET", "https://reqres.in/api/users?page=2", (req) => {
      req.url = "https://reqres.in/api/users?page=3";
      req.continue((res) => {
        expect(res.statusCode).to.equal(200);
      });
    }).as("dummy");

    const app = new APIpage();
    app.clickGetLink();

    cy.wait("@dummy");
  });
});
