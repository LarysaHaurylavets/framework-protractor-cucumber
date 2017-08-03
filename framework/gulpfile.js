var gulp=require('gulp'),
	cucumber=require('gulp-cucumber'),
	protractor=require('gulp-protractor').protractor,
	//webdriver_standalone=require('gulp-protractor').webdriver_standalone;	
	util=require('gulp-util');


//gulp.task('webdriver_standalone', webdriver_standalone);

gulp.task('test', function () {
  process.env.BROWSER = util.env.browser ? util.env.browser : "chrome";
  process.env.PLATFORM = util.env.platform ? util.env.platform : "desktop";
  process.env.TAG = util.env.tag ? util.env.tag : "";
  return gulp.src('features/*')
    .pipe(protractor({
      configFile: "protractor.conf.js",
      args: [
        '--cucumberOpts.tags', process.env.TAG
      ]
    }))
    .on('error', function (e) { throw e })
});
