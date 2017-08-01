var gulp=require('gulp'),
	cucumber=require('gulp-cucumber'),
	protractor=require('gulp-protractor').protractor,
	//webdriver_standalone=require('gulp-protractor').webdriver_standalone;	
	gutil=require('gulp-util');


//gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('test',  function(){
	gutil.env.browser? process.env.BROWSER=gutil.env.browser: process.env.BROWSER='chrome' ;
	gutil.env.platform?process.env.PLATFORM=gutil.env.platform:process.env.PLATFORM='desktop';

	return gulp.src('features/*')		
		.pipe(protractor({
			'configFile': 'protractor.conf.js'
		}));
});
