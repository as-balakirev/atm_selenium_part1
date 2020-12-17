const {expect} = require('chai');

describe('EPAM main menu tests', function() {
    browser.waitForAngularEnabled(false);
    browser.get('https://www.epam.com/');
    let menuItems = element.all(by.xpath('//ul[@class=\'top-navigation__row\']/li'))
    it('should have SERVICES in menu', function() {
        menuItems.get(0).getText().then(text => expect(text).to.equal('SERVICES'));
    });
    it('should have HOW WE DO IT in menu', function() {
        menuItems.get(1).getText().then(text => expect(text).to.contain('HOW WE DO IT'));
    });
    it('should have OUR WORK in menu', function() {
        menuItems.get(2).getText().then(text => expect(text).to.equal('OUR WORK'));
    });
    it('should have INSIGHTS in menu', function() {
        menuItems.get(3).getText().then(text => expect(text).to.equal('INSIGHTS'));
    });
    it('should have ABOUT in menu', function() {
        menuItems.get(4).getText().then(text => expect(text).to.equal('ABOUT'));
    });
    it('should have CAREERS in menu', function() {
        menuItems.get(5).getText().then(text => expect(text).to.equal('CAREERS'));
    });
});