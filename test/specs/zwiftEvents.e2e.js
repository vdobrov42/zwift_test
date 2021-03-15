const ZwiftHomePage = require('../pageobjects/home.zwiftPage');
const ZwiftEventsPage = require('../pageobjects/events.zwiftPage');
var chaiExpect = require('chai').expect;

/**
 * Tests navigation to Zwift Events page, applies filters, and verifies that events changed
 */

describe('zwift.com/events page', function(){
    it('should navigate to events page', function(){
        ZwiftHomePage.open();

        ZwiftEventsPage.sideBarNavBtn.click();
        ZwiftEventsPage.eventsBtn.waitForExist({timeout: 2000});
        expect(ZwiftEventsPage.eventsBtn.click());
    });

    it('should select and apply filters - checks if events have changed', function() {
        var currentEvents = [];
        ZwiftEventsPage.currentEventsObj.map(element => currentEvents.push(element.getText()));

        ZwiftEventsPage.filterEventsBtn.click();
        
        if (ZwiftEventsPage.filterBody == 'display: block;')
        {
            var isFilterLoaded = true;
        }
        else
        {
            var isFilterLoaded = false;
            console.log('Events section did not open');
        }

        if (isFilterLoaded == true){
            ZwiftEventsPage.sportsBtn.click();

            ZwiftEventsPage.sportsBtnActive.waitForExist({timeout: 2000});

            ZwiftEventsPage.intensitiesBtn.click();

            ZwiftEventsPage.intensitiesBtnActive.waitForExist({timeout: 2000});

            ZwiftEventsPage.startTimeBtn.click();

            ZwiftEventsPage.startTimeBtnActive.waitForExist({timeout: 2000});
        }

        ZwiftEventsPage.applyFiltersBtn.click();

        var updatedEvents = [];
        ZwiftEventsPage.currentEventsObj.map(element => updatedEvents.push(element.getText()));

        const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

        const areSameEvents = equals(currentEvents, updatedEvents);

        if (updatedEvents.length != 0)
        {
            var isEmpty = false;
        }
        
        if ((areSameEvents == false && isEmpty == false) || (areSameEvents == false && isEmpty == true))
        {
            var testsPassed = true;
        }
        else
        {
            var testsPassed = false;
        }

        chaiExpect(testsPassed).to.be.true;
    });
});


