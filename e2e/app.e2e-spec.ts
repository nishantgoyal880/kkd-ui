import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('kkd-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
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
    expect(page.getFarmerButton().getText()).toEqual('I\'m a farmer');
  });
});
