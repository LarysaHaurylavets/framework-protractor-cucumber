var platforms = {

    mobile: '--window-size=480,640',    
    tablet: '--window-size=1024,768',
    desktop: '--window-size=1920,1080'

};

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',  
    framework: "custom",
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    globalTimeout: 300000,
    pageTimeout: 300000,
    allScriptsTimeout: 300000,
    specs: [
        'features/*.feature'
    ],
    capabilities: {
        'browserName': process.env.BROWSER,
        chromeOptions : {
            args: [platforms[process.env.PLATFORM]]
        },
//         'moz:firefoxOptions': {
//             args: [platforms[process.env.PLATFORM]]
//         }
    },
    
    cucumberOpts: {
        require: [
            './step_definitions/*.js',
            './env.js',
            './support/hooks.js',
            './support/protractor-extensions.js'
        ],
        format: 'pretty'
    },

    // onPrepare: function () {

    //     browser.driver.manage().window().setSize(1920,1080);
    //     //browser.driver.manage().window().maximize();
    // }

};
