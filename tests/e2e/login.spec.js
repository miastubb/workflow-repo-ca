import { expect, test } from "@playwright/test";

test("shows error with invalid credentials", async ({ page }) => {
  await page.route("**/holidaze/auth/login", async (route) => {
    await route.fulfill({
      status: 401,
      contentType: "application/json",
      body: JSON.stringify({
        errors: [{ message: "Invalid credentials" }],
      }),
    });
  });

  await page.goto("/login/");

  await page.fill('input[name="email"]', "wrong@stud.noroff.no");
  await page.fill('input[name="password"]', "wrongpassword");

  await page.click('button[type="submit"]');

  await expect(page.locator("#message-container")).toContainText(
    "Invalid email or password",
  );
});

test("logs in successfully with valid credentials", async ({ page }) => {
  await page.route("**/holidaze/auth/login", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        accessToken: "fake-token",
        name: "Mia",
        email: "mia@test.com",
      }),
    });
  });

  await page.goto("/login/");

  await page.fill('input[name="email"]', "mia@test.com");
  await page.fill('input[name="password"]', "password123");

  await page.click('button[type="submit"]');

  await page.waitForURL("**/");
});
