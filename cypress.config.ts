import { defineConfig } from "cypress";
import { baseUrl } from "./cypress/contants";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: baseUrl
  },
});
