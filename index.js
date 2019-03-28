const {Builder, By, Key, until} = require('selenium-webdriver');
let firefox = require("selenium-webdriver/firefox");

(async function example() {
    let driver = new Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();
  try {
    await driver.get('http://unibulpress.com');
    let title = await driver.getTitle();
    console.log(title);
  } catch(e){
    console.log(e);
  } finally {
    await driver.quit();
  }
})();