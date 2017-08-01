'use strict';

var specTimeoutMs = 30000,
    ProtractorBy = by.constructor;

protractor.ElementFinder.prototype.waitToBeHidden = function () {
    var self = this;

    return browser.wait(function() {
        return self.isDisplayed()
            .then(function (displayed) {
                return !displayed;
            });
    }, specTimeoutMs, 'timed out waiting for element to be hidden');
};


protractor.ElementFinder.prototype.isPresentAndDisplayed = function () {
    var self = this;

    return self.isPresent().then(function (present) {
        if (present) {
            return self.isDisplayed();
        }

        return false;
    });
};


// protractor.ElementFinder.prototype.clickWhenClickable=function (locator, timeout) {
//     browser.wait(function () {
//         return browser.findElement(locator).then(function (element) {
//             return element.click().then(function () {
//                 return true;
//             }, function (err) {
//                 return false;
//             })
//         }, function (err) {
//             return false;
//         });
//     }, timeout);
    
// }


