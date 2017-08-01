'use strict';

var BasePage=function(){};

BasePage.prototype.visit = function (url) {
    return browser.get(url);
};  

BasePage.prototype.checkPageTitle=function(pageTitle){
	return browser.getTitle().then((title)=>{
		return title===pageTitle;
	});
};


module.exports = BasePage;




