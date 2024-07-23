const { defineConfig } = require("cypress");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");
const ExcelJs = require("exceljs");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  on("task", {
    excelToJsonConverter(filePath) {
      const result = excelToJson({
        source: fs.readFileSync(filePath), // fs.readFileSync return a Buffer
      });
      return result;
    },
  });

  on("task", {
    async writeExcelTest({ searchText, replaceText, change, filePath }) {
      const workbook = new ExcelJs.Workbook();
      await workbook.xlsx.readFile(filePath);
      const worksheet = workbook.getWorksheet("Sheet1");
      const output = await readExcel(worksheet, searchText);

      const cell = worksheet.getCell(
        output.row,
        output.column + change.colChange
      );
      cell.value = replaceText;
      //pending resolved rejected
      return workbook.xlsx
        .writeFile(filePath)
        .then(() => {
          return true;
        })
        .catch((error) => {
          return false;
        });
    },
  });

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

async function readExcel(worksheet, searchText) {
  let output = { row: -1, column: -1 };
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === searchText) {
        output.row = rowNumber;
        output.column = colNumber;
      }
    });
  });
  return output;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents,

    specPattern: "cypress/e2e/**/*",
  },
});
