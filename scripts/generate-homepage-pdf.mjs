import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = path.join(process.cwd(), "public/learnli-homepage.pdf");
const CHROME = process.env.CHROME_PATH || "/usr/bin/google-chrome-stable";
const ORIGIN = process.env.LEARNLI_PDF_ORIGIN || "http://127.0.0.1:4317";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForHome(origin) {
  for (let i = 0; i < 80; i += 1) {
    try {
      const response = await fetch(`${origin}/`);
      if (response.ok) return;
    } catch {
      // keep waiting
    }
    await sleep(500);
  }
  throw new Error(`Timed out waiting for ${origin}`);
}

async function main() {
  await waitForHome(ORIGIN);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--font-render-hinting=none"],
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
  await page.goto(`${ORIGIN}/`, { waitUntil: "networkidle0", timeout: 180000 });
  await page.evaluate(() => document.fonts.ready);

  await page.evaluate(async () => {
    const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const limit = document.documentElement.scrollHeight;
    for (let y = 0; y < limit; y += 700) {
      window.scrollTo(0, y);
      await pause(180);
    }
    window.scrollTo(0, 0);
    await pause(300);
  });

  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((img) => {
        if (img.complete) return null;
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });

  await page.evaluate(() => {
    document.documentElement.classList.add("pdf-export");
    document.querySelectorAll("header, footer").forEach((node) => node.remove());
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  });

  // Print media applies A4 page-breaks and hides site chrome. Backgrounds stay on.
  await page.emulateMediaType("print");

  await page.pdf({
    path: OUT,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: false,
    margin: { top: "10mm", right: "10mm", bottom: "12mm", left: "10mm" },
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate:
      '<div style="font-size:8px;width:100%;text-align:center;color:#5b7177;font-family:Outfit,sans-serif;padding-top:4px;">LearnLi · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
    omitBackground: false,
  });

  await browser.close();
  console.log(`Wrote A4 paginated PDF to ${OUT}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
