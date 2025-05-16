# Test info

- Name: Scroll to top button appears and scrolls
- Location: C:\Users\Lowkey-Surface\Documents\GitHub\portfolio.page\tests\e2e.spec.js:14:1

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('#scrollTopBtn')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#scrollTopBtn')

    at C:\Users\Lowkey-Surface\Documents\GitHub\portfolio.page\tests\e2e.spec.js:18:27
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Color palette button generates swatches', async ({ page }) => {
   4 |   await page.goto('https://fabaaa.github.io/portfolio.page');
   5 |
   6 |   const button = page.locator('#colorPaletteBtn');
   7 |   await expect(button).toBeVisible();
   8 |   await button.click();
   9 |
  10 |   const swatches = page.locator('#palettePreview .color-swatch');
  11 |   await expect(swatches).toHaveCount(5);
  12 | });
  13 |
  14 | test('Scroll to top button appears and scrolls', async ({ page }) => {
  15 |   await page.goto('https://fabaaa.github.io/portfolio.page');
  16 |   await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  17 |   const scrollBtn = page.locator('#scrollTopBtn');
> 18 |   await expect(scrollBtn).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible()
  19 |   await scrollBtn.click();
  20 |   await page.waitForTimeout(500); // allow scroll animation
  21 |   const y = await page.evaluate(() => window.scrollY);
  22 |   expect(y).toBeLessThan(100);
  23 | });
```