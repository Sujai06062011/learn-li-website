import fs from "node:fs/promises";
import path from "node:path";
import puppeteer from "puppeteer-core";
import { PDFDocument, rgb } from "pdf-lib";

const OUT = path.join(process.cwd(), "public/learnli-homepage.pdf");
const CHROME = process.env.CHROME_PATH || "/usr/bin/google-chrome-stable";
const ORIGIN = process.env.LEARNLI_PDF_ORIGIN || "http://127.0.0.1:4317";

const A4 = { width: 595.28, height: 841.89 };
const MARGIN = 22;
const CREAM = rgb(246 / 255, 241 / 255, 232 / 255);
const VIEWPORT_WIDTH = 1200;
const DEVICE_SCALE = 2;

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

async function preparePage(page) {
  await page.setViewport({
    width: VIEWPORT_WIDTH,
    height: 1800,
    deviceScaleFactor: DEVICE_SCALE,
  });
  await page.emulateMediaType("screen");
  await page.goto(`${ORIGIN}/`, { waitUntil: "networkidle0", timeout: 180000 });
  await page.evaluate(() => document.fonts.ready);

  await page.evaluate(async () => {
    const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const limit = document.documentElement.scrollHeight;
    for (let y = 0; y < limit; y += 800) {
      window.scrollTo(0, y);
      await pause(180);
    }
    window.scrollTo(0, 0);
    await pause(300);
  });

  await page.evaluate(async () => {
    await Promise.all(
      [...document.images].map((img) => {
        if (img.complete && img.naturalWidth > 0) return null;
        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });

  await page.evaluate(() => {
    document.querySelectorAll("header, footer, nextjs-portal").forEach((node) => node.remove());
    document.querySelectorAll("[data-next-badge-root], #__next-build-watcher").forEach((node) => {
      node.remove();
    });
    document.querySelectorAll('a[download="LearnLi-website.pdf"]').forEach((node) => node.remove());
    document.documentElement.style.overflow = "visible";
    document.body.style.overflow = "visible";
    document.body.style.background = "#F6F1E8";
  });

  await page.addStyleTag({
    content: `
      html, body {
        background: #F6F1E8 !important;
      }
      * {
        scrollbar-width: none !important;
        animation: none !important;
        transition: none !important;
      }
      *::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
        height: 0 !important;
      }
      [data-pdf-chunk] {
        background: #F6F1E8 !important;
        overflow: hidden !important;
      }
      .pointer-events-none.absolute {
        display: none !important;
      }
    `,
  });
}

async function captureChunks(page) {
  const handles = await page.$$("[data-pdf-chunk]");
  const shots = [];

  for (const handle of handles) {
    const meta = await handle.evaluate((node) => {
      const rect = node.getBoundingClientRect();
      return {
        align: node.getAttribute("data-pdf-align") || "top",
        width: Math.ceil(rect.width),
        height: Math.ceil(rect.height),
      };
    });

    await page.setViewport({
      width: VIEWPORT_WIDTH,
      height: Math.max(1800, meta.height + 240),
      deviceScaleFactor: DEVICE_SCALE,
    });
    await handle.evaluate((node) => node.scrollIntoView({ block: "start", inline: "nearest" }));
    await sleep(160);

    const png = await handle.screenshot({
      type: "png",
      omitBackground: false,
      captureBeyondViewport: true,
    });
    shots.push({ png, align: meta.align, ...meta });
  }

  return shots;
}

function packPages(items, usableH, gap) {
  const pages = [];
  let current = [];
  let currentH = 0;

  for (const item of items) {
    const extra = current.length ? gap : 0;
    const nextH = currentH + extra + item.height;

    if (!current.length) {
      current = [item];
      currentH = item.height;
      continue;
    }

    if (nextH <= usableH) {
      current.push(item);
      currentH = nextH;
      continue;
    }

    const stacked = currentH + gap + item.height;
    if (stacked <= usableH / 0.92) {
      current.push(item);
      pages.push(current);
      current = [];
      currentH = 0;
      continue;
    }

    pages.push(current);
    current = [item];
    currentH = item.height;
  }

  if (current.length) pages.push(current);
  return pages;
}

async function buildPdf(shots) {
  const pdf = await PDFDocument.create();
  const usableW = A4.width - MARGIN * 2;
  const usableH = A4.height - MARGIN * 2;
  const gap = 8;
  const baseScale = usableW / (VIEWPORT_WIDTH * DEVICE_SCALE);

  const items = [];
  for (const shot of shots) {
    const image = await pdf.embedPng(shot.png);
    items.push({
      image,
      width: image.width * baseScale,
      height: image.height * baseScale,
    });
  }

  const groups = packPages(items, usableH, gap);

  for (const group of groups) {
    const rawH = group.reduce((sum, item) => sum + item.height, 0) + gap * (group.length - 1);
    const packScale = rawH > usableH ? usableH / rawH : 1;
    const totalH = rawH * packScale;
    let yTop = A4.height - MARGIN - (usableH - totalH) / 2;

    const page = pdf.addPage([A4.width, A4.height]);
    page.drawRectangle({
      x: 0,
      y: 0,
      width: A4.width,
      height: A4.height,
      color: CREAM,
    });

    for (const item of group) {
      const width = item.width * packScale;
      const height = item.height * packScale;
      const x = MARGIN + (usableW - width) / 2;
      const y = yTop - height;
      page.drawImage(item.image, { x, y, width, height });
      yTop = y - gap * packScale;
    }
  }

  await fs.writeFile(OUT, await pdf.save());
}

async function main() {
  await waitForHome(ORIGIN);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ["--no-sandbox", "--disable-gpu", "--disable-dev-shm-usage", "--font-render-hinting=none"],
    headless: true,
  });
  const page = await browser.newPage();
  await preparePage(page);
  const shots = await captureChunks(page);
  await browser.close();

  if (!shots.length) {
    throw new Error("No [data-pdf-chunk] sections found to capture");
  }

  await buildPdf(shots);
  const info = await fs.stat(OUT);
  console.log(
    `Wrote A4 PDF from ${shots.length} on-screen sections to ${OUT} (${Math.round(info.size / 1024)}kb; ${shots
      .map((shot, index) => `${index + 1}:${shot.width}x${shot.height}`)
      .join(", ")})`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
