import DemoQa from "../POM/demoqa.cy";

describe("webtables", () => {
  it("test1", () => {
    const dq = new DemoQa();
    cy.visit("https://demoqa.com/webtables");
    // dq.navigateToWebtables();
    dq.addWebtableDetails();
    dq.assesrtText();
  });
});
