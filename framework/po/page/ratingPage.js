'use strict';

var BasePage = require('./basePage'),
	ResultsPage=require('./resultsPage'),
	inheritance=require('./inheritance');

var EC=protractor.ExpectedConditions;
var expect = require('chai').expect;


var RatingPage=function(){
	var _this=this;

	_this._data={
		url:'https://logiclike.com/rating',
		allCountries:element(by.css('.rating-page__select__country-icon')),
		country: element.all(by.repeater('item in $parent.$parent.regionList')).get(1),
		allCity: element.all(by.binding('$parent.selectedCity.cityName')).first(),
		city: element.all(by.repeater('item in $parent.$parent.cityList')).get(1),
		allSchools: element.all(by.binding('$parent.selectedInstitution.institutionName')).first(),
		school: element.all(by.binding('item.institutionName')).get(9),
		class: element.all(by.binding('item.ratingTitle')).get(2),
		allClasses: element.all(by.binding('$parent.selectedGrade.ratingTitle')).first()
		//pupilName=element.all(by.binding('item.displayName')).get(1);
		
	},
	
	
	_this.setFilters=function(){		
			return browser.sleep(2000)
			.then(()=>{
				return browser.wait(EC.elementToBeClickable(_this._data.allCountries),20000)
			})		
			.then(()=>{
				return _this._data.allCountries.click()
			})		
			.then(()=>{				
				return _this._data.country.click()
			})
			.then(()=>{
				return _this._data.allCity.click()
			})
			.then(()=>{
				return _this._data.city.click()
			})
			.then(()=>{
				return _this._data.allSchools.click()
			})
			.then(()=>{
				return _this._data.school.click()
			})
			.then(()=>{
				return _this._data.allClasses.click()
			})
			.then(()=>{
				return _this._data.class.click()
			})
			
	};

}

inheritance.inherits(BasePage,RatingPage);
module.exports=RatingPage;


