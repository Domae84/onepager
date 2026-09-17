const fs = require("fs");

// Locate an already-installed Chrome/Edge so we don't need puppeteer to
// download its own Chromium copy (puppeteer-core has none bundled).
const CANDIDATES = [
  process.env.ProgramFiles + "\\Google\\Chrome\\Application\\chrome.exe",
  process.env["ProgramFiles(x86)"] + "\\Google\\Chrome\\Application\\chrome.exe",
  process.env.LOCALAPPDATA + "\\Google\\Chrome\\Application\\chrome.exe",
  process.env.ProgramFiles + "\\Microsoft\\Edge\\Application\\msedge.exe",
  process.env["ProgramFiles(x86)"] + "\\Microsoft\\Edge\\Application\\msedge.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
];

function findBrowser() {
  if (process.env.CV_BROWSER_PATH && fs.existsSync(process.env.CV_BROWSER_PATH)) {
    return process.env.CV_BROWSER_PATH;
  }
  for (const candidate of CANDIDATES) {
    if (candidate && fs.existsSync(candidate)) return candidate;
  }
  throw new Error(
    "No Chrome or Edge installation found. Install Google Chrome or Microsoft Edge, " +
    "or set the CV_BROWSER_PATH environment variable to a browser executable."
  );
}

module.exports = { findBrowser };
