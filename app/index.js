const {Builder, By, Key, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');


(async function seleniumTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.epam.com');
        await driver.findElement(By.css('li a[href *= careers]')).click();
        await driver.wait(until.elementLocated(By.css('button.recruiting-search__submit')), 1000);
        await driver.findElement(By.css('input.recruiting-search__input')).sendKeys('Automated Testing Engineer', Key.RETURN);
        await driver.findElement(By.xpath('//button[@type=\'submit\']')).click();
        await driver.wait(until.elementIsVisible(driver.findElement(By.className('search-result__error-message'))));

    } finally {
        await driver.quit();
    }
})();