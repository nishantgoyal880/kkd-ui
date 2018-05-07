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
    return element(by.css('[href="#acc"]'));
  }

  getFarmerAddAddressButton(){
    return element(by.css('[href="#add"]'));
  }

  getFarmerChangePasswordButton(){
    return element(by.css('[href="#chPass"]'));
  }

  getFarmerAlternateMobileButton(){
    return element(by.css('[href="#altMob"]'));
  }

  getFarmerDeleteProfileButton(){
    return element(by.css('[href="#delPro"]'));
  }

  getAddProductButton(){
    return element(by.css('[href="#prod"]'));
  }

  getAddProductTitle() {
    return element(by.css('app-farmer-add-product h1')).getText();
  }

  getChooseProductDropDown() {
    return element(by.cssContainingText('option','Choose Product Name'));
  }

  getProductDescriptionInputBox() {
    return element(by.cssContainingText('label','Product description'));
  }

  getProductPricePerKgInputBox() {
    return element(by.cssContainingText('label','Product Price per kg'));
  }

  getProductBulkOrderPricePerKgInputBox() {
    return element(by.cssContainingText('label','Product Bulk Order Price per kg'));
  }

  getQuantityInputBox() {
    return element(by.cssContainingText('label','Quantity'));
  }

  getUploadImageInputBox() {
    return element(by.cssContainingText('label','Upload an image'));
  }

  getSubmitProductButton(){
    return element(by.buttonText('Submit Product'));
  }

  getBankDetailsButton(){
    return element(by.css('[href="#bank"]'));
  }

  getFarmerBankDetailsTitle() {
    return element(by.css('app-farmer-bank-details h1')).getText();
  }

  getFarmerBankAccountNumberInputBox() {
    return element(by.cssContainingText('label','Accont Number'));
  }

  getFarmerBankAccountHolderNameInputBox() {
    return element(by.cssContainingText('label','Account Holder\'s Name'));
  }

  getFarmerBankIfscCodeInputBox() {
    return element(by.cssContainingText('label','IFSC Code'));
  }

  getFarmerBankSaveDetailsButton(){
    return element(by.buttonText('Save Details'));
  }

  getCurrentOrderButton(){
    return element(by.css('[href="#curr"]'));
  }

  getPreviousOrderButton(){
    return element(by.css('[href="#prev"]'));
  }

  getViewProductButton(){
    return element(by.css('[href="#view"]'));
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
    return element(by.css('[href="#home"]'));
  }

  getPreviousOrdersButton(){
    return element(by.css('[href="#profile"]'));
  }

  getAddressBookButton(){
    return element(by.css('[href="#messages"]'));
  }

  getCustomerChangePasswordButton(){
    return element(by.css('[href="#settings"]'));
  }

  getCustomerChangePasswordTitle() {
    return element(by.id('settings')&&by.css('app-customer-my-account h1'));
  }

  getCustomerMobileNumberInputBox() {
    return element(by.cssContainingText('label','Mobile No'));
  }

  getCustomerCurrentPasswordInputBox() {
    return element(by.cssContainingText('label','Current Password'));
  }
  getCustomerNewPasswordInputBox() {
    return element(by.cssContainingText('label','New Password'));
  }
  getCustomerReenterNewPasswordInputBox() {
    return element(by.cssContainingText('label','Re-enter new Password'));
  }

  getCustomerChangePasswordSubmitButton(){
    return element(by.buttonText('Submit'));
    }

  getDeleteProfileButton(){
    return element(by.css('[href="#settings1"]'));
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
