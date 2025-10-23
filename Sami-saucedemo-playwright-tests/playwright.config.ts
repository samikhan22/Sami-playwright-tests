import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    // Slow down test execution
    actionTimeout: 5000,
    navigationTimeout: 10000,
    // Add delays between actions
    launchOptions: {
      slowMo: 1000,
    },
  },
  testDir: './tests',
  // Global timeout for each test
  timeout: 30000,
});