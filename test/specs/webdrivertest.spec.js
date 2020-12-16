const {Builder, By, Key, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const {expect} = require('chai');

describe('selenium javascript tests', function() {
    let driver;
    before(function() {
        driver = new Builder().forBrowser('chrome').build();
    });
    after(function() {
        driver.quit()
    });
    it('should have an official EPAM site title', function() {
        driver.get('https://www.epam.com')
            .then(() => driver.executeScript('return document.title'))
            .then((documentTitle) => expect(documentTitle).to.be.equal('EPAM | Enterprise Software Development, Design & Consulting'))
    });
    it('should have a correct host', function () {
        driver.get('https://www.epam.com')
            .then(() => driver.executeScript('return document.location.host'))
            .then((host) => expect(host).to.be.equal('www.epam.com'));
    });
});

