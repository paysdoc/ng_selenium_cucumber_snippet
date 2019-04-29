// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

(function () {
  'use strict';

  exports.config = {
    allScriptsTimeout: 11000,
    cucumberOpts: {
      compiler: 'ts:ts-node/register',
      require: './src/step-definitions/**/*.ts',
      tags: '@Test'
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./src/features/**/*.feature'],
    capabilities: {
      'browserName': 'chrome',
      // 'chromeOptions': { args: [ '--window-size=1900,1600', '--no-sandbox'] }
      'chromeOptions': { args: [ '--headless', '--disable-gpu', '--window-size=800,600', '--no-sandbox'] }
    },
    directConnect: true,
    baseUrl: 'http://localhost:4200/',
    onPrepare() {
      require('ts-node').register({
        project: require('path').join(__dirname, './tsconfig.e2e.json')
      });
    }
  };
})();
