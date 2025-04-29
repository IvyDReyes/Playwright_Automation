/** 
import {test, expect} from '@playwright/test';

test('Assertions Demo', async ({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause()
    //ASSERTIONS
    //1. Check if the element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)
    
    const heading = page.getByRole('heading', { name: 'The Kitchen' });
    if (await heading.isVisible()) {
    await heading.click();
    }
});

*/


import test, {page, expect} from '@playwright/test';

test('Assertions Demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    
    //ASSERTIONS
    //1. Check if the element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    if(await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }
    //2. Check if the element is hidden or visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden()
    //3. Check if the element is enabled or disabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()
   //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    //4. Check if the text matches or not
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
   // await expect.soft(page.locator('text=The Kitchen')).not.toHaveText('The Kitchen1')
    //5. Check if the element has a specific attribute or not
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', /.*css-dpmy2a/)
    await expect(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/);
    //6. Check the page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)
    await page.pause()
    //7. Visual validation with screenshot
    await expect(page).toHaveScreenshot()

});

