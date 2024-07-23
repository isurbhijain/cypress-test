import APIpage from "../POM/apipage.cy";

describe("My First Test Suite", function () {
  it("My FirstTest case", function () {
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");

    cy.intercept(
      {
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
      },

      {
        statusCode: 200,
        body: [
          {
            book_name: "RestAssured with Java",
            isbn: "RSU",
            aisle: "2301",
          },
        ],
      }
    ).as("bookretrievals");

    const app = new APIpage();
    app.demoGETLink();
    cy.wait("@bookretrievals").then(({ request, response }) => {
      app.tableAssert(response);
    });
    app.textAssert();
  });
});
