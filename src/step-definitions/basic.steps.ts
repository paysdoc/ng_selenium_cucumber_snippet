import {defineSupportCode, Given, setDefaultTimeout, Then, When} from 'cucumber';
import {AppPage} from '../support/app.po';

const chai = require('chai').use(require('chai-as-promised'));
chai.should();
const expect = chai.expect;
const page = new AppPage();

defineSupportCode(() => {
  setDefaultTimeout(20 * 1000);

  Given(/^a running app on port 4200$/, () => {});

  When(/^I navigate to the homepage$/,
    callback => { page.navigateTo().then(callback, callback); });

  Then(/^I should see a page containing '([^']*)'$/,
    (text, callback) => {
      page.getTitleText().should.become(text).and.eventually.notify(callback);
    });
});
