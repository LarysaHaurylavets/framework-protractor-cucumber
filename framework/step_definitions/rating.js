var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Then}){
	Then(/^I set filters$/, function(){
		return pageFactory.currentPage.setFilters()
			.then(()=>{
				return pageFactory.getPageObjects('results');
			})
	});
});