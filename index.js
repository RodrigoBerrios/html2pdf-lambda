const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium');
const inlineCss = require('inline-css');

chromium.setHeadlessMode = true;
chromium.setGraphicsMode = false;

/**
 * Function to generate PDF Buffer from String HTML
 * @param {String} html 
 * @param {Object} options 
 * @returns {Promise<Buffer>}
 */

module.exports.generatePDF = async (html, options) => {
  let browser = null;
  try {
    if (typeof html !== 'string') {
      throw new Error('The html must be in string format');
    }

    // The browser is launched
    browser = await puppeteer.launch({
      args: options.args || chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });

    if (options.args) {
      delete options.args;
    }

    // A new page is created
    const page = await browser.newPage();

    // Loader is created
    const loaded = page.waitForNavigation({
      waitUntil: 'networkidle0', // wait for page to load completely
    });

    // CSS transformed
    const parsedHTML = await inlineCss(html, { url: '/' });

    // The content of the page is generated with the HTML
    await page.setContent(parsedHTML);
    await loaded;

    // Generate PDF
    const optionsPDF = options
      ? options
      : {
          format: 'Letter',
        };

    // Get a Buffer PDF
    const buffer = await page.pdf(optionsPDF);

    return buffer;
  } catch (err) {
    throw new Error(err);
  } finally {
    if (browser !== null) {
      // Close Browser
      await browser.close();
    }
  }
};
