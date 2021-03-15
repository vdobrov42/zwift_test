const ZwiftPage = require('./zwiftPage');


/**
 * contains elements required for testing Home page
 */
class ZwiftHomePage extends ZwiftPage {

    get cookiePreference(){
        return $('=Cookie Preferences');
    }

    get consentButton(){
        return $('button#truste-consent-button');
    }

    get getTitle(){
        return browser.getTitle();
    }

    open () {
        return super.open();
    }

    close() {
        return super.closeBrowser();
    }

}

module.exports = new ZwiftHomePage();
