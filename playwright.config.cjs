module.exports = {
  testDir: "./tests/e2e",
  testMatch: "**/*.spec.js",
  use: {
    baseURL: "http://127.0.0.1:5500",
    trace: "on-first-retry",
  },
};
