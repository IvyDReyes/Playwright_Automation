import {test, expect} from '@playwright/test';

test('Selectors Demo', async ({page}) => {

   await page.goto('https://www.saucedemo.com/')
   
   await page.pause();
   //using any object property
   await page.click('id=user-name')
   await page.locator('id=user-name').fill('Goji')
   await page.locator('[id="user-name"]').fill('Ashleigh')
   // using css selector
   // #login-button
    await page.locator('#login-button').click()
    // using xpath selector
    //input[@name="password"]
    await page.locator('xpath=//input[@id="user-name"]').fill('CJ')
    await page.locator('//input[@id="user-name"]').fill('Tulip')
    // using text selector
    await page.locator('text=LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click()
    await page.locator('text=LOGIN').click();
});