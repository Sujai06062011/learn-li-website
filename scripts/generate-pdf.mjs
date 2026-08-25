import { spawn } from "node:child_process";
import path from "node:path";
import puppeteer from "puppeteer-core";

const OUT = path.join(process.cwd(), "public/learnli-company-product.pdf");
const CHROME = process.env.CHROME_PATH || "/usr/bin/google-chrome-stable";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function isUp(origin) {
  try {
    const response = await fetch(`${origin}/brochure`);
    return response.ok;
  } catch {
    return false;
  }
}

async function waitForServer(origin) {
  for (let i = 0; i < 80; i += 1) {
    if (await isUp(origin)) return;
    await sleep(500);
  }
  throw new Error(`Timed out waiting for ${origin}`);
}

async function main() {
  let origin = process.env.LEARNLI_PDF_ORIGIN || "http://127.0.0.1:4317";
  let child = null;

  if (!(await isUp(origin))) {
    origin = "http://127.0.0.1:4318";
    child = spawn(
      "npx",
      ["next", "dev", "--hostname", "127.0.0.1", "--port", "4318"],
      { stdio: "inherit" }
    );
    const stop = () => child?.kill("SIGTERM");
    process.on("exit", stop);
    await waitForServer(origin);
  }

  try {
    const browser = await puppeteer.launch({
      executablePath: CHROME,
      args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--font-render-hinting=none"],
      headless: true,
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 2 });
    await page.goto(`${origin}/brochure`, { waitUntil: "networkidle0", timeout: 120000 });
    await page.emulateMediaType("print");
    await page.pdf({
      path: OUT,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
    });
    await browser.close();
    console.log(`Wrote ${OUT}`);
  } finally {
    if (child) {
      child.kill("SIGTERM");
      await sleep(300);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
