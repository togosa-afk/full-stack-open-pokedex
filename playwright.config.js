const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './test',
  testMatch: '**/pokedex.spec.js',
  timeout: 30000,
  fullyParallel: true,
  workers: 1,
  use: {
    baseURL: 'http://localhost:5001',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:5001',
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
})