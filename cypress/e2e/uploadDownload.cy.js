import UPDN from "../POM/uploaddownloadpage.cy";

describe("Upload-download test", () => {
  it("verify excel upload download", () => {
    const replaceNum = 450;
    const searchTextFruit = "Mango";
    cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");

    const ud = new UPDN();

    ud.clickDownloadBtn();
    // cy.get("#downloadButton").click();
    const FilePath =
      Cypress.config("fileServerFolder") + "/cypress/downloads/download.xlsx";

    cy.task("writeExcelTest", {
      searchText: searchTextFruit,
      replaceText: replaceNum,
      change: { rowChange: 0, colChange: 2 },
      filePath: FilePath,
    });

    ud.selectUploadFile(FilePath);
    // cy.get("#fileinput").selectFile(FilePath);

    ud.assertText(searchTextFruit, replaceNum);
    // cy.contains(searchTextFruit)
    //   .parent()
    //   .parent()
    //   .find("#cell-4-undefined")
    //   .should("have.text", replaceNum);
  });
});
