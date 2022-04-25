const debug = require('debug')
const puppeteer = require('puppeteer')
const fs = require('fs')
const { promisify } = require('util')

const MINERURL = 'https://mine.pikapikachu.xyz'
const LOGPATH = './log.txt'
const LOGINTERVAL = 10000

const writeFileAsync = promisify(fs.writeFile)
const debugLogger = debug('wrxdaemon')

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-gpu'
    ]
  })
  const page = await browser.newPage()
  await page.goto(MINERURL)
  setInterval(async () => {
    const rate = await page.$eval('#rate', (span) => span.innerText)
    const total = await page.$eval('#total', (span) => span.innerText)
    debugLogger(`${rate},${total}`)
    await writeFileAsync(LOGPATH, `${rate},${total}\n`, { flag: 'a+' })
  }, LOGINTERVAL)
})()