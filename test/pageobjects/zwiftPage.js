module.exports = class ZwiftPage {
    /**
    * Opens Zwift home page or have an option to open a sub-page
    */
    open () {
        browser.setWindowSize(1920, 1080)
        return browser.url(`https://www.zwift.com/`);
    }

    openPath (path) {
        return browser.url(`https://www.zwift.com/${path}`);
    }
}
