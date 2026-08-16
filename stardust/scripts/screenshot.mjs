import { chromium } from 'playwright';
import path from 'path';

const files = [
  ['index-A-proposed.html', 'direction-1.png'],
  ['index-B-proposed.html', 'direction-2.png'],
  ['index-C-proposed.html', 'direction-3.png'],
];

const root = process.argv[2];

const browser = await chromium.launch();
for (const [src, out] of files) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const fileUrl = 'file://' + path.join(root, 'stardust/prototypes', src);
  await page.goto(fileUrl, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(root, 'Screenshots', out), fullPage: true });
  console.log('captured', out);
  await page.close();
}
await browser.close();
