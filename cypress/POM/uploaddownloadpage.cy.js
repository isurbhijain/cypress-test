export default class UPDN {
  clickDownloadBtn() {
    cy.get("#downloadButton").click();
  }
  selectUploadFile(FilePath) {
    cy.get("#fileinput").selectFile(FilePath);
  }

  assertText(searchTextFruit, replaceNum) {
    cy.contains(searchTextFruit)
      .parent()
      .parent()
      .find("#cell-4-undefined")
      .should("have.text", replaceNum);
  }
}
