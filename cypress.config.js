const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  projectId: "62xi1k",

  e2e: {
    baseUrl: "https://qauto.websitesa.app.br/",
    specPattern: "cypress/e2e/**/*.cy.js",
    experimentalRunAllSpecs: true,
    supportFile: "cypress/support/e2e.js",
    env: {
      apiUrl: "https://qauto.websitesa.app.br/api/",
      hideXhr: true,
    },
    reporter: "spec",

    setupNodeEvents(on, config) {
      on("after:run", (results) => {
        const reportsDir = path.resolve(__dirname, "cypress", "reports");
        fs.mkdirSync(reportsDir, { recursive: true });

        const outFile = path.join(reportsDir, "raw-results.json");
        fs.writeFileSync(outFile, JSON.stringify(results, null, 2));
      });

      return config;
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
});
