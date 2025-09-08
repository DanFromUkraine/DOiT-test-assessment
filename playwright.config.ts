import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
      testDir: "./tests",
      fullyParallel: true,

      retries: process.env.CI ? 2 : 0,
      workers: process.env.CI ? 1 : undefined,
      reporter: "html",

      projects: [
            {
                  name: "chromium",
                  use: { ...devices["Desktop Chrome"] },
            },

            {
                  name: "firefox",
                  use: { ...devices["Desktop Firefox"] },
            },

            {
                  name: "webkit",
                  use: { ...devices["Desktop Safari"] },
            },
      ],

      use: {
            baseURL: "http://localhost:3005",
      },

      webServer: {
            command: "pnpm dev -p 3005",
            url: "http://localhost:3005",
      },
});
