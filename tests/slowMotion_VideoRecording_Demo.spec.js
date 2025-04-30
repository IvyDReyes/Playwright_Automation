import {test, expect, chromium} from '@playwright/test';

test('Slow Motion Video Recording Demo', async () => {

    const browser = await chromium.launch({
        headless: false,
        slowMo: 900
    });

    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 1280, height: 720 }
        }

    });

    const page = await context.newPage();
 
    await page.goto("https://demo.applitools.com/");
    await page.locator('[placeholder="Enter your username"]').fill("Yumi");
    await page.locator('[placeholder="Enter your password"]').fill("12345");
    await page.locator("text=Sign in").click();

    await context.close();

});