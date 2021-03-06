exports.config = {
    framework: 'mocha',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/protractor/*.spec.js'],
    mochaOpts: {
        reporter: 'spec',
        timeout: 10000
    }
};