import {test} from "@playwright/test";

test.skip("Test One", async ({ page }) => {

});

test('not yet ready', async ({ page }) => {
    test.fail();
  });

 
test.fixme('test to be fixed', async ({ page }) => {
    //...
});


test('slow test', async ({ page }) => {
    test.slow();
    //...
});



//Tags
test('Test login page @fast', async ({ page }) => {
    //...
});