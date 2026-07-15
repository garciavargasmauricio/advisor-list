import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  // This allows Playwright to find both .spec.ts and .test.ts files inside the tests folder
  testMatch: ["**/*.spec.ts", "**/*.test.ts"],

  fullyParallel: true,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
