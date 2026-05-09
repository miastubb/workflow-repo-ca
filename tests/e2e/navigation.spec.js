import { expect, test } from "@playwright/test";

test("navigates to the venue details page", async ({ page }) => {
  await page.route("**/holidaze/venues", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify([
        {
          id: "123",
          name: "Test Venue",
          media: [],
          price: 100,
          maxGuests: 2,
        },
      ]),
    });
  });

  await page.goto("/");

  await expect(page.locator("#venue-container")).toBeVisible();
});
