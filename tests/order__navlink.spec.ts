import { test, expect } from '@playwright/test'

test('should navigate to the order page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Order' and click on it
  await page.click('text=Order')
  // The new URL should be "/order" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/order')
  // The new page should contain an h1 with "Order"
  await expect(page.locator('h1')).toContainText('Order')
})
