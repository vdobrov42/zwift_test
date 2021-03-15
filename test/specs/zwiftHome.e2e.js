const ZwiftHomePage = require('../pageobjects/home.zwiftPage');
var chaiExpect = require('chai').expect;

/**
 * Tests navigation to Zwift Home page and validates page title
 */

describe('zwift.com page', function() {
    it('should open zwift.com', function() {
        ZwiftHomePage.open();

        ZwiftHomePage.consentButton.waitForExist({timeout: 2000});
        ZwiftHomePage.consentButton.click();

        ZwiftHomePage.cookiePreference.waitForExist({timeout: 2000});

        chaiExpect(ZwiftHomePage.getTitle).to.include('The at Home Cycling & Running Virtual Training App - Zwift');
    });
});