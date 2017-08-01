var page = require('../po/page/basePage');
var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, Then}){

	Given(/^I am on "([^"]*)" page$/, function (page) {
        return pageFactory.getPageObjects(page).visit(pageFactory.currentPage._data.url);
	});

	Then(/^title should be "([^"]*)"$/, function (pageTitle) {
        return pageFactory.currentPage.checkPageTitle(pageTitle);
	});

});

