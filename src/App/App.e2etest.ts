import puppeteer from 'puppeteer';

let browser: puppeteer.Browser;
let page: puppeteer.Page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: false
  });
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 800,
      height: 600
    },
    userAgent: ''
  });

  await page.goto('http://localhost:3000/');
});

afterEach(async () => {
  await page.close();
});

it('Application title loads correctly', async () => {
  const h1 = await expect(page).toMatchElement('h1');
  await expect(h1).toMatch('Welcome to LiveScan 5 UI proof of concept!');
});

it('Application page contains two buttons', async () => {
  await expect(page).toMatchElement('button', { text: 'Empty Form' });
  await expect(page).toMatchElement('button', { text: 'Load Form' });
});
