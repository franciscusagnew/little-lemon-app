import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.getByText('Reserve a table').click()
  await expect(page).toHaveURL('http://localhost:3000/reservations')
})
