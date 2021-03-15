const ZwiftPage = require('./zwiftPage');


/**
 * contains elements required for testing Events page
 */
class ZwiftEventsPage extends ZwiftPage {

    get sideBarNavBtn(){
        return $('button._1y_LNCV6bN8pLbpzSLHKCd');
    }
    get eventsBtn(){
        return $('=Events');
    }
    get currentEventsObj(){
        return $$('div.header-title');
    }
    get filterEventsBtn(){
        return $('button.filter-toggle');
    }
    get filterBody(){
        return $('#myModal').getAttribute('style');
    }
    get sportsBtn(){
        return $('.buttons=Cycling');
    }
    get sportsBtnActive(){
        return $('.active=Cycling');
    }
    get intensitiesBtn(){
        return $('.buttons=A');
    }
    get intensitiesBtnActive(){
        return $('.active=A');
    }
    get startTimeBtn(){
        return $('.buttons=Morning');
    }
    get startTimeBtnActive(){
        return $('.active=Morning');
    }
    get applyFiltersBtn(){
        return $('button.apply-button');
    }

    openPath (path) {
        return super.openPath(path);
    }
}

module.exports = new ZwiftEventsPage();
