import { test, expect } from '@playwright/test'

test('should navigate to the login page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Login' and click on it
  await page.click('text=Login')
  // The new URL should be "/login" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/login')
  // The new page should contain an h1 with "Login"
  await expect(page.locator('h1')).toContainText('Login')
})
