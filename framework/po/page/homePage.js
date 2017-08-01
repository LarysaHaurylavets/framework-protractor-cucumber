'use strict';

var expect = require('chai').expect;
var EC=protractor.ExpectedConditions;

var BasePage=require('./basePage'),	
	inheritance=require('./inheritance');

var HomePage=function(){	
	var _this=this;
	_this._data={
		url:'https://logic.by/',
		linkLogin: element(by.linkText('Войти в личный кабинет')),
		logo: element(by.css('div.top-header__logo'))
	},
	
	
	_this.homePageShouldBeDisplayed=function(){		
		return _this._data.logo.isDisplayed().then(function(isDisplayed){
			return expect(isDisplayed).to.be.true;
		});
	};


	_this.followLinkLogin=function(){	
		return browser.sleep(1000)
			.then(()=>{
				return browser.wait(EC.visibilityOf(_this._data.linkLogin),20000)
		 	})		
				
			.then(()=>{
				return browser.wait(EC.elementToBeClickable(_this._data.linkLogin),20000)	
			})	
			.then(()=>{
				_this._data.linkLogin.click();
			})
					
	};
	
}


inheritance.inherits(BasePage,HomePage);
module.exports=HomePage;

