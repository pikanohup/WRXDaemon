const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu'
    ]
  })
  const page = await browser.newPage()
  await page.goto('https://baidu.com')
  // setInterval(async () => {
  //   const rate = await page.$eval('#rate', (span) => span.innerText)
  //   const total = await page.$eval('#total', (span) => span.innerText)
  //   console.log(rate, total)
  // }, 10000)
  console.log('666')
})()