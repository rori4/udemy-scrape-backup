const webdriver = require('selenium-webdriver');

let driver = new webdriver.Builder()
    .forBrowser('firefox')
    .usingServer('http://34.73.98.31:4444/wd/hub')
    .build().then((e)=>{
        console.log(e);
    });