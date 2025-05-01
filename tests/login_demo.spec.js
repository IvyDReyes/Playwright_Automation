/** 
import { test, expect } from '@playwright/test';

test('Login Demo Test 1', async ({ page }) => {
  await page.goto('https://demo.applitools.com/');
  await page.pause();
  await page.getByRole('textbox', { name: 'Enter your username' }).fill('Yumi');
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('12345');
  await page.getByRole('link', { name: 'Sign in' }).click(); 
 
});
*/

import { test, expect } from "@playwright/test";
import { time } from "console";
import { link } from "fs";

test.only("Login Demo Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  //await page.pause()
  await page.locator('[placeholder="Enter your username"]').fill("Yumi");
  await page.locator('[placeholder="Enter your password"]').fill("12345");
  await page.locator("text=Sign in").click();
  test.slow();
  // await page.waitForTimeout(5000);
});

test("Login Demo Test 2", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await page.pause();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'mandaAliceTestJean' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});

