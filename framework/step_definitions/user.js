var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then}){
	Then(/^User page should be displayed$/, function () {
        return pageFactory.currentPage.userPageShouldBeDisplayed();
    });
    
	Then(/^I choose logic game$/, function () {
        return pageFactory.currentPage.userPagelinkGame();
    });

    Then(/^I start game$/, function () {
        return pageFactory.currentPage.userStartGame();
    });  

    Then(/^I return on previous page$/, function () {
        return pageFactory.currentPage.userReturnPreviousPage();
    });

    Then(/^I logout from user page$/, function () {
        return pageFactory.currentPage.userLogout();
    });

    Then(/^authorization page should be displayed$/, function () {
        return pageFactory.getPageObjects('auth');
    });

    
});


