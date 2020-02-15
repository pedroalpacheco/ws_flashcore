const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.flashscore.com.br/equipe/luverdense-mt/bLywEGoh/resultados');
  let html = await page.content()
  // console.log(html)
  const $ = await cheerio.load(html);
  const tabela = $('#live-table').text();
  console.log(tabela);

  await browser.close();
})();