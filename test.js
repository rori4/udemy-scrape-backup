const {Builder, By, until} = require('selenium-webdriver');

  let driver;

    driver = yield new Builder().forBrowser('firefox').usingServer('http://localhost:4444/wd/hub/').build();

    yield driver.get('http://www.google.com/ncr');
    yield driver.findElement(By.name('q')).sendKeys('webdriver');
    yield driver.findElement(By.name('btnG')).click();
    yield driver.wait(until.titleIs('webdriver - Google Search'), 1000);

  test.after(() => driver.quit());