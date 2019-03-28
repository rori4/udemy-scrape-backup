var wd = require('wd'),
testingbotKey = "a24663e49451117465b2b152bcf692b5",
testingbotSecret = "5d977f95be0289507d7e2e8e0efd5d10"
 
desiredCaps = {
    'browserName': 'firefox',
    'platform': 'VISTA',
    'version': 'latest',
    'client_key': testingbotKey,
    'client_secret': testingbotSecret
}

driver = wd.remote("https://" + testingbotKey + ":" + testingbotSecret + "@" + "hub.testingbot.com/wd/hub")
driver.init(desiredCaps, function() {
  driver.get('https://unibulpress.com', function() {
    driver.title(function(err, title) {
        console.log(title)
        driver.quit()
    })
  })
})