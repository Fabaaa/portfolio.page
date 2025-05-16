const { test, expect } = require('@playwright/test');

test('Color palette button generates swatches', async ({ page }) => {
  await page.goto('https://fabaaa.github.io/portfolio.page');

  const button = page.locator('#colorPaletteBtn');
  await expect(button).toBeVisible();
  await button.click();

  const swatches = page.locator('#palettePreview .color-swatch');
  await expect(swatches).toHaveCount(5);
});

test('Scroll to top button appears and scrolls', async ({ page }) => {
  await page.goto('https://fabaaa.github.io/portfolio.page');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  const scrollBtn = page.locator('#scrollTopBtn');
  await expect(scrollBtn).toBeVisible();
  await scrollBtn.click();
  await page.waitForTimeout(500); // allow scroll animation
  const y = await page.evaluate(() => window.scrollY);
  expect(y).toBeLessThan(100);
});