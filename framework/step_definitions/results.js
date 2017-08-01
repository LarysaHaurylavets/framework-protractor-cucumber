var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then}){
	Then(/^I should see a list of pupils$/, function () {
        return pageFactory.currentPage.checkImagesResults();
    });
});