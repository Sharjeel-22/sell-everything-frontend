import { test, expect } from '@playwright/test';

test.describe('AppComponent Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to your app's URL, adjust as necessary
    await page.goto('http://localhost:4200'); // Adjust the URL as needed
  });

  test('should not change status if userRole is not present', async ({ page }) => {
    // Assuming the component logic will react appropriately
    // Check for some element that indicates status change
    const statusElement = await page.locator('selector-for-status-indicator'); // Replace with actual selector

    // Verify the initial status (for example, status should be 'false' or similar)
    await expect(statusElement).toHaveText('Status: false'); // Adjust based on your implementation
  });

  test('should change status if userRole is present', async ({ page }) => {
    // Mock or set the user role in session storage
    await page.evaluate(() => {
      sessionStorage.setItem('userRole', 'admin'); // Adjust the key/value as needed
    });

    await page.reload(); // Reload the page to trigger ngOnInit

    const statusElement = await page.locator('selector-for-status-indicator'); // Replace with actual selector
    await expect(statusElement).toHaveText('Status: true'); // Adjust based on your implementation
  });
});
