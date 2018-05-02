import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getLoginSignUpButton(){
  return element(by.buttonText('LogIn & SignUp'));
  }

  getLoginFarmerButton(){
    return element(by.css('app-header [routerLink="/farmer/login"]')).getText();
    }
  
  getSignUpFarmerButton(){
    return element(by.css('app-header [routerLink="/farmer/authenticationAndAuthorization"]')).getText();
    }

  getLoginCustomerButton(){
    return element(by.css('app-header [routerLink="/customer/login"]')).getText();
    }

  getSignUpCustomerButton(){
    return element(by.css('app-header [routerLink="/customer/register"]')).getText();
    }

  getBodyHeading() {
    return element(by.css('app-body h1')).getText();
  }

  getBodyText() {
    return element(by.css('app-body p')).getText();
  }

  getFarmerButton() {
    return element(by.css('app-body [routerLink="/farmer/login"]'));
  }

  getFarmerLoginTitle() {
    return element(by.css('app-farmer-login h1'));
  }

  getCustomerButton() {
    return element(by.css('app-body [routerLink="/customer/login"]'));
  }

  getCustomerLoginTitle() {
    return element(by.css('app-customer-login h1'));
  }

  getHomeButton() {
    return element(by.css('[routerLink="/home"]'));
  }

  getHelpButton() {
    return element(by.css('[routerLink="/help"]'));
  }

  getHelpTitle() {
    return element(by.css('app-help h1'));
  }

  getHelpSubTitle1() {
    return element(by.css('[href="#card-element-114778"]'));
  }

  getHelpSubTitle2() {
    return element(by.css('[href="#card-element-979782"]'));
  }

  getHelpSubTitle3() {
    return element(by.css('[href="#card-element-111"]'));
  }

  getHelpSubTitle4() {
    return element(by.css('[href="#card-element-222"]'));
  }

  getSupportButton() {
    return element(by.css('[routerLink="/support"]'));
  }

  getSupportTitle() {
    return element(by.css('app-support h1'));
  }

  getProductButton() {
    return element(by.css('[routerLink="/productList"]'));
  }
}
