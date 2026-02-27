/*
Day 10 - Using XPath in Playwright

Playwright supports XPath using:
page.locator("xpath=YOUR_XPATH")

Relative XPath is recommended.
*/

import { test, expect } from '@playwright/test';

test('XPath Practice Test', async ({ page }) => {

  // Open local HTML file
  await page.goto('file:///PATH-TO-YOUR/index.html');

  // Locate element using XPath by attribute
  const email = page.locator("xpath=//input[@id='email']");
  await email.fill("test@gmail.com");

  // Locate password using contains()
  const password = page.locator("xpath=//input[contains(@id,'pass')]");
  await password.fill("123456");

  // Locate button using text
  const loginButton = page.locator("xpath=//button[text()='Login']");
  await loginButton.click();

});
