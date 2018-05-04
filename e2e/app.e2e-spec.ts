import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('kkd-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display Login SignUp button', () => {
    expect(page.getLoginSignUpButton()).toBeTruthy();
  });

  it('should display farmer Login button', () => {
    page.getLoginSignUpButton().click();
    expect(page.getLoginFarmerDropDownButton()).toEqual('Login as Farmer');
  });

  it('should display farmer SignUp button', () => {
    page.getLoginSignUpButton().click();
    expect(page.getSignUpFarmerDropDownButton()).toEqual('Sign Up as Farmer');
  });

  it('should display customer Login button', () => {
    page.getLoginSignUpButton().click();
    expect(page.getLoginCustomerDropDownButton()).toEqual('Login as Customer');
  });

  it('should display customer SignUp button', () => {
    page.getLoginSignUpButton().click();
    expect(page.getSignUpCustomerDropDownButton()).toEqual('Sign Up as Customer');
  });

  it('should display Kisan Ki Dukan message', () => {
    expect(page.getBodyHeading()).toEqual('Kisan Ki Dukan');
  });

  it('should display tagLine', () => {
    expect(page.getBodyText()).toEqual('It\'s not fresh if it\'s not from the farm.');
  });

  it('should display farmer button', () => {
    expect(page.getFarmerButton().getText()).toEqual('I\'m a Farmer');
  });

  it('should display title after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerLoginTitle().getText()).toEqual('Login Farmer');
  });

  it('should display mobile number inputBox after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerLoginMobileInputBox()).toBeTruthy();
  });

  it('should display password inputBox after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerLoginPasswordInputBox()).toBeTruthy();
  });

  it('should display forget password button after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerForgetPasswordButton().getText()).toEqual('Forgot Password?');
  });

  it('should display login farmer button after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerLoginButton()).toBeTruthy();
  });

  fit('should display My Account button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getMyAccountButton()).toBeTruthy();  
  });

  fit('should display Farmer Add Address button after clicking My Account Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getMyAccountButton().click();
    expect(page.getFarmerAddAddressButton()).toBeTruthy();  
  });

  it('should display Farmer Change Password button after clicking My Account Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getMyAccountButton().click();
    expect(page.getFarmerChangePasswordButton()).toBeTruthy();  
  });

  it('should display Farmer Alternate Mobile button after clicking My Account Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getMyAccountButton().click();
    expect(page.getFarmerAlternateMobileButton()).toBeTruthy();  
  });

  it('should display Farmer Delete Profile button after clicking My Account Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getMyAccountButton().click();
    expect(page.getFarmerDeleteProfileButton()).toBeTruthy();  
  });

  it('should display Add Product button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getAddProductButton()).toBeTruthy();
  });

  fit('should display Add Product Title after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getAddProductTitle()).toEqual('Upload Product');
  });

  it('should display Choose product Dropdown after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getChooseProductDropDown()).toBeTruthy();
  });

  it('should display Product Description InputBox after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getProductDescriptionInputBox()).toBeTruthy();
  });

  it('should display Product Price Per Kg InputBox after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getProductPricePerKgInputBox()).toBeTruthy();
  });

  it('should display Product Bulk Order Price Per Kg InputBox after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getProductBulkOrderPricePerKgInputBox()).toBeTruthy();
  });

  it('should display Quantity InputBox after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getQuantityInputBox()).toBeTruthy();
  });

  it('should display Upload Image InputBox after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getUploadImageInputBox()).toBeTruthy();
  });

  it('should display Submit Product Button after clicking Add Product Button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getAddProductButton().click();
    expect(page.getSubmitProductButton()).toBeTruthy();
  });

  it('should display Bank Details button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getBankDetailsButton()).toBeTruthy();
  });

  fit('should display Farmer Bank Account Title after clicking Bank Details button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getBankDetailsButton().click();
    expect(page.getFarmerBankDetailsTitle()).toEqual('Bank Details');
  });

  it('should display Farmer Bank Account Number after clicking Bank Details button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getBankDetailsButton().click();
    expect(page.getFarmerBankAccountNumberInputBox()).toBeTruthy();;
  });

  it('should display Farmer Bank Account Holder Name after clicking Bank Details button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getBankDetailsButton().click();
    expect(page.getFarmerBankAccountHolderNameInputBox()).toBeTruthy();;
  });

  it('should display Farmer Bank Account IFSC Code after clicking Bank Details button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getBankDetailsButton().click();
    expect(page.getFarmerBankIfscCodeInputBox()).toBeTruthy();;
  });

  it('should display Farmer Bank Account Save Details Button after clicking Bank Details button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    page.getBankDetailsButton().click();
    expect(page.getFarmerBankSaveDetailsButton()).toBeTruthy();;
  });

  it('should display Current Order button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getCurrentOrderButton()).toBeTruthy();
  });

  it('should display Previous Order button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getPreviousOrderButton()).toBeTruthy();
  });

  it('should display View Product button after clicking login farmer button', () => {
    page.getFarmerButton().click();
    page.getFarmerLoginButton().click();
    expect(page.getViewProductButton()).toBeTruthy();;
  });

  it('should display register farmer button after clicking farmer button', () => {
    page.getFarmerButton().click();
    expect(page.getFarmerRegisterButton()).toBeTruthy();
  });

  it('should display aadhar inputBox', () => {
    page.getFarmerButton().click();
    page.getFarmerRegisterButton().click();
    expect(page.getFarmerRegisterAadharInputBox()).toBeTruthy();
  });

  it('should display send OTP button', () => {
    page.getFarmerButton().click();
    page.getFarmerRegisterButton().click();
    expect(page.getFarmerRegisterSendOtpButton()).toBeTruthy();
  });

  it('should display customer button', () => {
    expect(page.getCustomerButton().getText()).toEqual('I\'m a Customer');
  });

  it('should display title after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerLoginTitle().getText()).toEqual('LOGIN CUSTOMER');
  });

  it('should display mobile number inputBox after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerLoginMobileInputBox()).toBeTruthy();
  });

  it('should display password inputBox after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerLoginPasswordInputBox()).toBeTruthy();
  });

  it('should display forget password button after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerForgetPasswordButton().getText()).toEqual('Forgot Password');
  });

  it('should display login customer button after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerLoginButton()).toBeTruthy();
  });

  it('should display My Orders button after clicking login customer button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    expect(page.getMyOrdersButton()).toBeTruthy();
  });

  it('should display Previous Orders button after clicking login customer button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    expect(page.getPreviousOrdersButton()).toBeTruthy();
  });

  it('should display Address Book button after clicking login customer button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    expect(page.getAddressBookButton()).toBeTruthy();
  });

  it('should display Change Password button after clicking login customer button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    expect(page.getCustomerChangePasswordButton()).toBeTruthy();
  });





  fit('should display Change Password Title after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerChangePasswordTitle()).toBeTruthy();
  });

  fit('should display Mobile Number InputBox after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerMobileNumberInputBox()).toBeTruthy();
  });

  fit('should display Current Password InputBox after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerCurrentPasswordInputBox()).toBeTruthy();
  });

  fit('should display New Password InputBox after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerNewPasswordInputBox()).toBeTruthy();
  });

  fit('should display Reenter New Password InputBox after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerReenterNewPasswordInputBox()).toBeTruthy();
  });

  fit('should display Submit Button after clicking customer change password button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    page.getCustomerChangePasswordButton().click();
    expect(page.getCustomerChangePasswordSubmitButton()).toBeTruthy();
  });






  it('should display Delete Profile button after clicking login customer button', () => {
    page.getCustomerButton().click();
    page.getCustomerLoginButton().click();
    expect(page.getDeleteProfileButton()).toBeTruthy(); 
  });

  it('should display register customer button after clicking customer button', () => {
    page.getCustomerButton().click();
    expect(page.getCustomerRegisterButton()).toBeTruthy();
  });

  it('should display customer first name inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterFirstNameInputBox()).toBeTruthy();
  });

  it('should display customer last name inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterLastNameInputBox()).toBeTruthy();
  });

  it('should display customer mobile number inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterMobileInputBox()).toBeTruthy();
  });

  it('should display customer password inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterPasswordInputBox()).toBeTruthy();
  });

  it('should display customer reenter password inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterReenterPasswordInputBox()).toBeTruthy();
  });

  it('should display customer inputBox after clicking customer register button', () => {
    page.getCustomerButton().click();
    page.getCustomerRegisterButton().click();
    expect(page.getCustomerRegisterSendOtpButton()).toBeTruthy();
  });

  it('should display home button', () => {
    expect(page.getHomeButton().getText()).toEqual('Home');
  });

  it('should display help button', () => {
    expect(page.getHelpButton().getText()).toEqual('Help');
  });

  it('should display help title', () => {
    page.getHelpButton().click();
    expect(page.getHelpTitle().getText()).toEqual('HELP');
  });

  it('should display help subTitle1', () => {
    page.getHelpButton().click();
    expect(page.getHelpSubTitle1().getText()).toEqual('How to Register');
  });

  it('should display help subTitle2', () => {
    page.getHelpButton().click();
    expect(page.getHelpSubTitle2().getText()).toEqual('Aadhaar Verification');
  });

  it('should display help subTitle3', () => {
    page.getHelpButton().click();
    expect(page.getHelpSubTitle3().getText()).toEqual('Buying Products');
  });

  it('should display help subTitle4', () => {
    page.getHelpButton().click();
    expect(page.getHelpSubTitle4().getText()).toEqual('Normal Order vs Bulk Order');
  });

  it('should display support button', () => {
    expect(page.getSupportButton().getText()).toEqual('Support');
  });

  it('should display support title', () => {
    page.getSupportButton().click();
    expect(page.getSupportTitle().getText()).toEqual('SUPPORT');
  });

  it('should display support subTitle1', () => {
    page.getSupportButton().click();
    expect(page.getSupportSubTitle1()).toBeTruthy();
  });

  it('should display support subTitle2', () => {
    page.getSupportButton().click();
    expect(page.getSupportSubTitle2()).toBeTruthy();
  });

  it('should display support subTitle3', () => {
    page.getSupportButton().click();
    expect(page.getSupportSubTitle3()).toBeTruthy();
  });

  it('should display support subTitle4', () => {
    page.getSupportButton().click();
    expect(page.getSupportSubTitle4()).toBeTruthy();
  });

  it('should display submit issue button', () => {
    page.getSupportButton().click();
    expect(page.getSubmitIssueButton()).toBeTruthy();
  });

  it('should display product button', () => {
    expect(page.getProductButton().getText()).toEqual('Products');
  });

});
