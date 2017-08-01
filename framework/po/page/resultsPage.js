'use strict';

var expect=require('chai').expect;
var BasePage=require('./basePage'),
	inheritance = require('./inheritance');

var ResultsPage=function(){
	var _this=this;

	_this._data={
		imageResults: element.all(by.className('rating-page__content__avatar'))
	}
	

	_this.checkImagesResults=function(){	
		return _this._data.imageResults.count()
			.then((number)=>{
				return expect(number).to.be.above(0);
		})

	}

}

inheritance.inherits(BasePage, ResultsPage);
module.exports=ResultsPage;