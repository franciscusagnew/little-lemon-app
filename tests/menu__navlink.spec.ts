import { test, expect } from '@playwright/test'

test('should navigate to the menu page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Menu' and click on it
  await page.click('text=Menu')
  // The new URL should be "/menu" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/menu')
  // The new page should contain an h1 with "Menu"
  await expect(page.locator('h1')).toContainText('Menu')
})
