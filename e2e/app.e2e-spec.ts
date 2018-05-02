import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('kkd-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Login SignUp button', () => {
    page.navigateTo();
    expect(page.getLoginSignUpButton()).toBeTruthy();
  });

  it('should display farmer Login button', () => {
    page.navigateTo();
    page.getLoginSignUpButton().click();
    expect(page.getLoginFarmerButton()).toEqual('Login As Farmer');
  });

  it('should display farmer SignUp button', () => {
    page.navigateTo();
    page.getLoginSignUpButton().click();
    expect(page.getSignUpFarmerButton()).toEqual('Sign Up As Farmer');
  });

  it('should display customer Login button', () => {
    page.navigateTo();
    page.getLoginSignUpButton().click();
    expect(page.getLoginCustomerButton()).toEqual('Login As Customer');
  });

  it('should display customer SignUp button', () => {
    page.navigateTo();
    page.getLoginSignUpButton().click();
    expect(page.getSignUpCustomerButton()).toEqual('Sign Up As Customer');
  });

  it('should display Kisan Ki Dukan message', () => {
    page.navigateTo();
    expect(page.getBodyHeading()).toEqual('Kisan Ki Dukan');
  });

  it('should display tagLine', () => {
    page.navigateTo();
    expect(page.getBodyText()).toEqual('It\'s not fresh if it\'s not from the farm.');
  });

  it('should display farmer button', () => {
    page.navigateTo();
    expect(page.getFarmerButton().getText()).toEqual('I\'m a Farmer');
  });

  it('should display title after clicking farmer button', () => {
    page.navigateTo();
    page.getFarmerButton().click();
    expect(page.getFarmerLoginTitle().getText()).toEqual('Login Farmer');
  });

  it('should display customer button', () => {
    page.navigateTo();
    expect(page.getCustomerButton().getText()).toEqual('I\'m a Customer');
  });

  it('should display title after clicking customer button', () => {
    page.navigateTo();
    page.getCustomerButton().click();
    expect(page.getCustomerLoginTitle().getText()).toEqual('Login Customer');
  });

  it('should display home button', () => {
    page.navigateTo();
    expect(page.getHomeButton().getText()).toEqual('Home');
  });

  it('should display help button', () => {
    page.navigateTo();
    expect(page.getHelpButton().getText()).toEqual('Help');
  });

  it('should display help title', () => {
    page.navigateTo();
    page.getHelpButton().click();
    expect(page.getHelpTitle().getText()).toEqual('Help');
  });

  it('should display help subTitle1', () => {
    page.navigateTo();
    page.getHelpButton().click();
    expect(page.getHelpSubTitle1().getText()).toEqual('How to Register');
  });

  it('should display help subTitle2', () => {
    page.navigateTo();
    page.getHelpButton().click();
    expect(page.getHelpSubTitle2().getText()).toEqual('Aadhaar Verification');
  });

  it('should display help subTitle3', () => {
    page.navigateTo();
    page.getHelpButton().click();
    expect(page.getHelpSubTitle3().getText()).toEqual('Buying Products');
  });

  it('should display help subTitle4', () => {
    page.navigateTo();
    page.getHelpButton().click();
    expect(page.getHelpSubTitle4().getText()).toEqual('Normal Order vs Bulk Order');
  });

  it('should display support button', () => {
    page.navigateTo();
    expect(page.getSupportButton().getText()).toEqual('Support');
  });

  it('should display support title', () => {
    page.navigateTo();
    page.getSupportButton().click();
    expect(page.getSupportTitle().getText()).toEqual('Support');
  });

  it('should display product button', () => {
    page.navigateTo();
    expect(page.getProductButton().getText()).toEqual('Products');
  });

});
