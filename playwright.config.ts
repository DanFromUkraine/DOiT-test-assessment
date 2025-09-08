import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
      testDir: "./tests",
      fullyParallel: true,
      reporter: "html",
      use: {
            baseURL: "http://localhost:3005",
      },
      webServer: {
            command: "pnpm dev -p 3005",
            url: "http://localhost:3005",
      },
});
