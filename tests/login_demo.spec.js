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

test("Login Demo Test 1", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  //await page.pause()
  await page.locator('[placeholder="Enter your username"]').fill("Yumi");
  await page.locator('[placeholder="Enter your password"]').fill("12345");
  await page.locator("text=Sign in").click();
  await page.waitForTimeout(5000);
});

test("Login Demo Test 2", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.pause();
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('button[type="submit"]').click();
  await page
    .locator('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
    .click();
  await page.locator('a[href="/web/index.php/auth/logout"]').click();
  await page.waitForTimeout(5000);
});

test.only("Login Demo Test 3", async ({ page }) => {
  await page.pause();
});
