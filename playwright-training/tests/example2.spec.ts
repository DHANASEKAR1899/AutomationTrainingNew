import { test, expect } from '@playwright/test';


// Here we have 2 testcases (i.e) 2 test and each test run on 3 different browsers so after executing this spec.ts file 2 Tests x 3 different browser = 6 Execution happens
// if you use ".only" after test keyword - it execute that testcase only in 3 different browsers 1 x 3 = 3
// by mistake u push this ".only" code in pipeline if we run the testcases in ci/cd we get error because when u use only it will consider that only one testcase is there...!


// test.only ===> run only this test case (if commited in git by mistake - u need to remove and need to commit the change)



test('has title', async ({ page }) => {
  
   // print message
  console.log("Test 2 ===> TC 1 started");

  await page.goto('https://playwright.dev/');
  
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);


  //wait for 5 seconds === Manually I added wait for 5 seconds ===> static wait
  // By default playwright have dynamic wait for 30 seconds
  await page.waitForTimeout(5000);

  // print message
  console.log("Test 2 ===> TC 1 Completed");
});

test('get started link', async ({ page }) => {
  // print message
  console.log("Test 2 ===> TC 2 started");

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

   // print message
  console.log("Test 2 ===> TC 2 completed");
});
