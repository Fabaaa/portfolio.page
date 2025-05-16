# Test info

- Name: Color palette button generates swatches
- Location: C:\Users\Lowkey-Surface\Documents\GitHub\portfolio.page\tests\e2e.spec.js:3:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('#colorPaletteBtn')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('#colorPaletteBtn')

    at C:\Users\Lowkey-Surface\Documents\GitHub\portfolio.page\tests\e2e.spec.js:7:24
```

# Page snapshot

```yaml
- banner:
  - heading "My Portfolio" [level=1]
  - paragraph: Welcome to my professional business card and portfolio.
- heading "About Me" [level=2]
- paragraph: A short introduction about your background, expertise, and passion for technology.
- heading "Projects" [level=2]
- list:
  - listitem:
    - strong: "Project Placeholder:"
    - text: Add details of your project here.
  - listitem:
    - strong: "Project Placeholder:"
    - text: Another project can be listed here.
- heading "Skills & Technologies" [level=2]
- paragraph: List your expertise in different technologies.
- heading "Interactive Section" [level=2]
- button "Click me"
- contentinfo:
  - paragraph:
    - text: "Contact:"
    - link "your.email@example.com":
      - /url: mailto:your.email@example.com
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Color palette button generates swatches', async ({ page }) => {
   4 |   await page.goto('https://fabaaa.github.io/portfolio.page');
   5 |
   6 |   const button = page.locator('#colorPaletteBtn');
>  7 |   await expect(button).toBeVisible();
     |                        ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
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
  18 |   await expect(scrollBtn).toBeVisible();
  19 |   await scrollBtn.click();
  20 |   await page.waitForTimeout(500); // allow scroll animation
  21 |   const y = await page.evaluate(() => window.scrollY);
  22 |   expect(y).toBeLessThan(100);
  23 | });
```