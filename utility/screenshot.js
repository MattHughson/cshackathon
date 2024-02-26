const puppeteer = require('puppeteer');

export async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 700, height: 1000 });
  await page.goto('http://localhost:3000'); // Update URL as needed
  await page.screenshot({ path: 'homepage.png' });
  await browser.close();
}

takeScreenshot();
