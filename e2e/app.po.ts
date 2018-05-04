import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getLoginSignUpButton(){
  return element(by.buttonText('LogIn & SignUp'));
  }

  getLoginFarmerDropDownButton(){
    return element(by.css('[routerLink="/farmer/login"]')).getText();
    }
  
  getSignUpFarmerDropDownButton(){
    return element(by.css('[routerLink="/farmer/authenticationAndAuthorization"]')).getText();
    }

  getLoginCustomerDropDownButton(){
    return element(by.css('[routerLink="/customer/login"]')).getText();
    }

  getSignUpCustomerDropDownButton(){
    return element(by.css('[routerLink="/customer/register"]')).getText();
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

  getFarmerLoginMobileInputBox() {
    return element(by.cssContainingText('label','Mobile Number*'));
  }

  getFarmerLoginPasswordInputBox() {
    return element(by.cssContainingText('label','Password*'));
  }

  getFarmerForgetPasswordButton() {
    return element(by.css('[routerLink="/farmer/forgetPassword"]'));
  }

  getFarmerLoginButton(){
    return element(by.buttonText('Login Farmer'));
  }
  
  getMyAccountButton(){
    return element(by.css('app-farmer-dashboardhref="#acc"]'));
  }

  getAddProductButton(){
    return element(by.css('app-farmer-dashboardhref="#prod"]'));
  }

  getBankDetailsButton(){
    return element(by.css('app-farmer-dashboardhref="#bank"]'));
  }

  getCurrentOrderButton(){
    return element(by.css('app-farmer-dashboardhref="#curr"]'));
  }

  getPreviousOrderButton(){
    return element(by.css('app-farmer-dashboardhref="#prev"]'));
  }

  getViewProductButton(){
    return element(by.css('app-farmer-dashboardhref="#view"]'));
  }

  getFarmerRegisterButton(){
    return element(by.buttonText('Register Farmer'));
  }

  getFarmerRegisterAadharInputBox(){
    return element(by.cssContainingText('label','Aadhaar Number*'));
  }

  getFarmerRegisterSendOtpButton(){
    return element(by.buttonText('Send OTP'));
  }

  getCustomerButton() {
    return element(by.css('app-body [routerLink="/customer/login"]'));
  }

  getCustomerLoginTitle() {
    return element(by.css('app-customer-login h1'));
  }

  getCustomerLoginMobileInputBox() {
    return element(by.cssContainingText('label','Mobile Number*'));
  }

  getCustomerLoginPasswordInputBox() {
    return element(by.cssContainingText('label','Password*'));
  }

  getCustomerForgetPasswordButton() {
    return element(by.css('[routerLink="/customer/forgetPassword"]'));
  }

  getCustomerLoginButton(){
    return element(by.buttonText('Login Customer'));
  }

  getMyOrdersButton(){
    return element(by.css('app-customer-my-account [href="#home"]'));
  }

  getPreviousOrdersButton(){
    return element(by.css('app-customer-my-account [href="#profile"]'));
  }

  getAddressBookButton(){
    return element(by.css('app-customer-my-account [href="#messages"]'));
  }

  getChangePasswordButton(){
    return element(by.css('app-customer-my-account [href="#settings"]'));
  }

  getDeleteProfileButton(){
    return element(by.css('app-customer-my-account [href="#settings1"]'));
  }

  getCustomerRegisterButton(){
    return element(by.buttonText('Register Customer'));
  }  

  getCustomerRegisterFirstNameInputBox() {
    return element(by.cssContainingText('label','First Name*'));
  }

  getCustomerRegisterLastNameInputBox() {
    return element(by.cssContainingText('label','Last Name'));
  }
  getCustomerRegisterMobileInputBox() {
    return element(by.cssContainingText('label','Mobile Number*'));
  }
  getCustomerRegisterPasswordInputBox() {
    return element(by.cssContainingText('label','Password*'));
  }

  getCustomerRegisterReenterPasswordInputBox() {
    return element(by.cssContainingText('label','Re-enter Password*'));
  }

  getCustomerRegisterSendOtpButton(){
    return element(by.buttonText('Send OTP'));
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

  getSupportSubTitle1() {
    return element(by.cssContainingText('label','Issue Title'));
  }

  getSupportSubTitle2() {
    return element(by.cssContainingText('label','Issue Description'));
  }
  getSupportSubTitle3() {
    return element(by.cssContainingText('label','E-mail'));
  }
  getSupportSubTitle4() {
    return element(by.cssContainingText('label','Screenshot'));
  }

  getSubmitIssueButton(){
    return element(by.buttonText('Submit Issue'));
    }
  
  getProductButton() {
    return element(by.css('[routerLink="/productList"]'));
  }
  
}
