import { expect, test } from "@playwright/test";

test("navigates to the venue details page", async ({ page }) => {
  await page.route("**/holidaze/venues/123**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        data: {
          id: "123",
          name: "Test Venue",
          description: "Test venue description",
          media: [],
          price: 100,
          maxGuests: 2,
        },
      }),
    });
  });

  await page.route("**/holidaze/venues**", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        data: [
          {
            id: "123",
            name: "Test Venue",
            media: [],
            price: 100,
            maxGuests: 2,
          },
        ],
      }),
    });
  });
  await page.goto("/");

  await expect(page.locator("#venue-container")).toBeVisible();

  const firstVenue = page.locator("#venue-container a").first();

  await expect(firstVenue).toBeVisible();

  await firstVenue.click();

  await expect(
    page.getByRole("heading", { name: /Venue details/i }),
  ).toBeVisible();
});
