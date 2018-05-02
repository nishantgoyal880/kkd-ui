import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getBodyHeading() {
    return element(by.css('app-body h1')).getText();
  }

  getBodyText() {
    return element(by.css('app-body p')).getText();
  }

  getFarmerButton() {
    return element(by.css('[routerLink="/farmer/login"]')).getText();
  }

}
