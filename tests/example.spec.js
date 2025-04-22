// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

let context;
let page;
test.beforeAll(async ({ browser }) => { 
  context = await browser.newContext();
  await context.tracing.start({
    screenshots: true,
    snapshots: true
  });
  page = await context.newPage();
} );

test.afterAll(async () => {
  await context.tracing.stop({path: 'test3_trace.zip'});
  await context.close();
})

test('has title', async ({}) => {


  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

 

});

test('get started link', async ({}) => {

  //await context.tracing.start({
   // screenshots: true,
   // snapshots: true
  // });


  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  //await context.tracing.stop({path: 'test3_trace.zip'});

});