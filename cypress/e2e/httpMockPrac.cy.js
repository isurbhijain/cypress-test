import APIpage from "../POM/apipage.cy";

// describe("Practice mock", () => {
//   it("test Mock", () => {
//     cy.visit("https://reqres.in/");

//     cy.intercept(
//       {
//         method: "GET",
//         url: "https://reqres.in/api/users?page=2",
//       },
//       {
//         statusCode: 200,
//         body: {
//           page: 2,
//           per_page: 6,
//           total: 12,
//           total_pages: 2,
//           data: [
//             {
//               id: 7,
//               email: "michael.lawson@reqres.in",
//               first_name: "Michael",
//               last_name: "Lawson",
//               avatar: "https://reqres.in/img/faces/7-image.jpg",
//             },
//           ],
//           support: {
//             url: "https://reqres.in/#support-heading",
//             text: "To keep ReqRes free, contributions towards server costs are appreciated!",
//           },
//         },
//       }
//     ).as("httpreq");

// cy.intercept("POST", "https://www.google-analytics.com/g/collect?**").as(
//   "dummy"
// );

// cy.intercept(
//   "POST",
//   "https://www.google-analytics.com/g/collect?**",
//   (req) => {
//     req.url = "https://www.google-analytics.com/g/collect?**";
//     req.continue((res) => {
//       expect(res.statusCode).to.equal(204);
//     });
//   }
// ).as("dummy");

// const app = new APIpage();
//     app.clickGetLink();

//     // Cypress.config("pageLoadTimeout", 120000);
//     // cy.wait("@dummy").its("response.statusCode").should("eq", 204);
//     // cy.wait("@dummy");
//     cy.wait("@httpreq");
//   });
// });

// describe("Practice mock", () => {
//   it("test Mock", () => {
//     cy.visit("https://www.automationexercise.com/api_list");

//     cy.intercept(
//       {
//         method: "GET",
//         url: "https://automationexercise.com/api/productsList",
//       },
//       {
//         statusCode: 200,
//         body: {
//           responseCode: 200,
//           products: [
//             {
//               id: 1,
//               name: "Blue Top",
//               price: "Rs. 500",
//               brand: "Polo",
//               category: { usertype: { usertype: "Women" }, category: "Tops" },
//             },
//           ],
//         },
//       }
//     ).as("httpreq");
//     cy.get(".panel-title > a >u").contains("Get All Products").click();
//     cy.get("#collapse1 > ul >li >a").then((el) => {
//       cy.wrap(el).invoke("removeAttr", "target").click();
//     });
//     cy.wait("@httpreq");
//   });
// });
describe("Practice mock", () => {
  it("test Mock", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");

    cy.intercept(
      {
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts",
      },
      {
        statusCode: 304,
        body: [
          {
            userId: 1,
            it: 1,
            title:
              "are or do repels provide blacked out except the option criticizes",
            body: "because he accepts\nundertakes the consequences of refusal and when\nhe criticizes the trouble so that the whole\nof our things are but they are the matter will happen to the architect",
          },
        ],
      }
    ).as("httpreq");
    cy.get("td + td>a").contains("/posts").click();
    cy.wait("@httpreq");
  });
});
// describe("Practice mock", () => {
//   it("test Mock", () => {
//     cy.visit("https://www.amazon.in/");

//     cy.intercept(
//       {
//         method: "GET",
//         url: "https://www.amazon.in/s?i=aps&k=oneplus%2012r&ref=nb_sb_noss&url=search-alias%3Daps",
//       },
//       {
//         statusCode: 200,
//         body: {
//           responseCode: 200,
//           products: [
//             {
//               id: 1,
//               name: "Blue Top",
//               price: "Rs. 500",
//               brand: "Polo",
//               category: { usertype: { usertype: "Women" }, category: "Tops" },
//             },
//           ],
//         },
//       }
//     ).as("httpreq");
//     cy.get("#twotabsearchtextbox").type("oneplus{enter}");
//     cy.wait("@httpreq");
//   });
// });
