'use strict';

var BasePage = require('./basePage'),
	UserPage=require('./userPage'),
	inheritance=require('./inheritance')	


var EC=protractor.ExpectedConditions;

var AuthPage=function(){
	var _this=this;

	_this._data={
		url:'https://logiclike.com/auth/login#/auth',
		email: element(by.model('authentication.login')),
		password: element(by.model('authentication.password')),	
		animation: element(by.css('div#loading-center-absolute')),			
		confirm: element.all(by.css('button.c-modal__btn')).first()
	},


	_this.submitForm=function(email,password){		

		return browser.isElementPresent(_this._data.email)
			.then(()=>{
				return _this._data.email.sendKeys(email)
			})		
			.then(()=>{
				return _this._data.password.sendKeys(password)
			})					
			.then(()=>{					
				return browser.sleep(1000)
			})		
			.then(()=>{
				return browser.wait(EC.elementToBeClickable(_this._data.confirm), 20000)
			})
			.then(()=>{
				return _this._data.confirm.click();
			})									

	}

}

inheritance.inherits(BasePage,AuthPage);
module.exports=AuthPage;

