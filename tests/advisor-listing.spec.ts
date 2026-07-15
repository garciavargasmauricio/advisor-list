import { test, expect } from "@playwright/test";

test.describe("Advisor Listing Flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    await page.waitForLoadState("networkidle");
  });

  test("should display the main layout and advisor profiles", async ({
    page,
  }) => {
    const heading = page.getByRole("heading", { name: "Advisor Availability" });
    await expect(heading).toBeVisible();

    const anyAdvisorName = page.locator("h3").first();
    await expect(anyAdvisorName).toBeVisible();

    const priceText = page.getByText(/\/min/);
    await expect(priceText.first()).toBeVisible();
  });

  test("should handle advisor action buttons correctly based on status", async ({
    page,
  }) => {
    const callButton = page.getByRole("button", { name: /Call/i }).first();
    await expect(callButton).toBeVisible();

    const chatButton = page.getByRole("button", { name: /Chat/i }).first();
    await expect(chatButton).toBeVisible();

    await callButton.click();
  });
});
