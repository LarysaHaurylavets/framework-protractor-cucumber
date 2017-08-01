var pageFactory = require('../po/page/pageFactory');

var {defineSupportCode} = require('cucumber');

defineSupportCode(function({When}){

	When(/^I submit login form with email "([^"]*)" and password "([^"]*)"$/, function(email,password){
		return pageFactory.currentPage.submitForm(email,password)
			.then(()=>{
				return pageFactory.getPageObjects('user');
			})
	});

});


