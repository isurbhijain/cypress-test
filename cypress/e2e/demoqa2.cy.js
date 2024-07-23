import WDUwebtables from "../POM/webdriveruniwebtables.cy";

describe("demoqa", () => {
  it("test", () => {
    const wt = new WDUwebtables();
    cy.visit("https://webdriveruniversity.com/Data-Table/index.html");
    wt.getTableText("Jones");
  });
});
