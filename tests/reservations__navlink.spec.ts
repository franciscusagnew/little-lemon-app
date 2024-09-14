import { test, expect } from '@playwright/test'

test('should navigate to the reservations page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('http://localhost:3000/')
  // Find an element with the text 'Reservations' and click on it
  await page.click('text=Reservations')
  // The new URL should be "/reservations" (baseURL is used there)
  await expect(page).toHaveURL('http://localhost:3000/reservations')
  // The new page should contain an h2 with "Reservation"
  await expect(page.locator('h1')).toContainText('Book Reservation')
})
