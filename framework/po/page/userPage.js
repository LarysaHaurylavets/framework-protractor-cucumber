'use strict';

var expect = require('chai').expect;
var EC=protractor.ExpectedConditions;

var BasePage=require('./basePage'),
	inheritance = require('./inheritance');

var UserPage=function(){
	var _this=this;


	_this._data={
		url:'https://logiclike.com/user#/service/logic',

		profile: element(by.binding('profile.name')),
		gameList: element(by.css('a[href^="/user#/store/logic-games"]')),
		gameName: element(by.css('a[href^="/game/battleship"]')),			
		animation: element(by.css('div#animated fadeOut')),	
		exit: element(by.linkText('Выход'))		
	}	
	

	_this.userPageShouldBeDisplayed=function(){					
		// return _this._data.profile.isDisplayed()
		// 	.then ((isDisplayed)=>{
		// 		return expect(isDisplayed).to.be.true;
		// 	})
			return _this._data.profile.isPresentAndDisplayed();

	};

	_this.userPagelinkGame=function(){				
			return browser.wait(EC.visibilityOf(_this._data.gameList), 30000)				
			.then(()=>{
				return browser.wait(EC.elementToBeClickable(_this._data.gameList), 30000)
			})
			.then(()=>{
				return _this._data.gameList.click()
			})			
			.then(()=>{
				return _this._data.gameName.click()
			})

	};

	_this.userStartGame=function(){
		return browser.waitForAngularEnabled(false)
			.then(()=>{
				return browser.sleep(1000);
			})				
	};

	_this.userReturnPreviousPage=function(){
		return browser.navigate().back()
			.then(()=>{
				return browser.wait(EC.urlContains('user'), 30000);
			})
	}

	_this.userLogout=function(){			
		return browser.sleep(1000)				
			.then(()=>{
				return browser.executeScript('arguments[0].scrollIntoView();', _this._data.exit)					
			})							
			.then(()=>{
				return _this._data.exit.click()
			});				
		
	}

}


inheritance.inherits(BasePage, UserPage);
module.exports=UserPage;

