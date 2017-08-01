var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then, When}){

	Then(/^the main logo should be visible$/, function () {
        return pageFactory.currentPage.homePageShouldBeDisplayed();
    });

	When(/^I open login form$/, function () {
        return pageFactory.currentPage.followLinkLogin()
        	.then(()=>{
        		return pageFactory.getPageObjects('auth');
        	})
    });
});

