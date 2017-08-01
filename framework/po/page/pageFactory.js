var AuthPage=require('./authPage'),
	HomePage=require('./homePage'),
	RatingPage=require('./ratingPage'),
	UserPage=require('./userPage'),
	ResultsPage=require('./resultsPage');

var PageFactory=function(){
	var _this=this;
	_this.currentPage = 'undefined';

	_this.getPageObjects=function(page){
		var pages={
			'auth': AuthPage,
			'home': HomePage,
			'user': UserPage,
			'rating': RatingPage,
			'results': ResultsPage
		};
		if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page]();
        return _this.currentPage;
	};	
};

module.exports=new PageFactory();