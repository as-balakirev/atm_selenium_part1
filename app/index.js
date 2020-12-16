const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function seleniumTest() {
    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(new chrome.Options().detachDriver(true))
        .build();


    try {

        await driver.get('https://www.epam.com');
        await driver.findElement(By.css('li a[href *= careers]')).click();
        await driver.wait(until.elementLocated(By.css('button.recruiting-search__submit')), 1000);
        await driver.findElement(By.css('input.recruiting-search__input')).sendKeys('Automated Testing Engineer', Key.RETURN);
        await driver.findElement(By.xpath('//span[@class="select2-selection__arrow"]')).click();
        let locationsList = await driver.findElement(By.xpath('//ul[@class=\'select2-results__options open\'][@aria-expanded=\'true\']'));
        await driver.wait(until.elementIsVisible(locationsList), 1000);
        await driver.findElement(By.xpath('//li[text()="Vitebsk"]')).click();
        await driver.findElement(By.xpath('//button[@type=\'submit\']')).click();
        await driver.wait(until.elementLocated(By.xpath('//section[@class="search-result"]/ul[@class="search-result__list"]')), 1000);

    } finally {
        await driver.quit();
    }
})();
