exports.config = {
  onPrepare: function () {
  		protractor.basePath = __dirname;
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));
        //protractor.normalize = require('./js/normalize.js');
  }	,
  //HTMLReport called once tests are finished 
  onComplete: function() {
     var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();
     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
        var HTMLReport = require('protractor-html-reporter');
        testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: './',
            //screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            //screenshotsOnlyOnFailure: false
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
    });
 },
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*.js'],
  capabilities: {
    browserName: 'chrome'
  }
}