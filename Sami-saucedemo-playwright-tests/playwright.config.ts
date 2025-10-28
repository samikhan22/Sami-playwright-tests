import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // Run headless in CI, headed locally
    headless: process.env.CI ? true : false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Slow down test execution
    actionTimeout: 5000,
    navigationTimeout: 10000,
    // Add delays between actions (only when not in CI)
    launchOptions: {
      slowMo: process.env.CI ? 0 : 1000,
    },
  },
  testDir: './tests',
  // Global timeout for each test
  timeout: 30000,
  // Retry failed tests once
  retries: process.env.CI ? 1 : 0,
  // Run tests in parallel in CI
  workers: process.env.CI ? 2 : 1,
});