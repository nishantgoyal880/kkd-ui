import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';

import { FarmerRegisterComponent } from './component/farmer-authentication-authorization/farmer-register/farmer-register.component';

import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent} from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent} from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';
import { FarmerAddAddressComponent } from './component/farmer-my-account/farmer-add-address/farmer-add-address.component';
import { FarmerAlternateMobileComponent } from './component/farmer-my-account/farmer-alternate-mobile/farmer-alternate-mobile.component';
import { FarmerChangePasswordComponent } from './component/farmer-my-account/farmer-change-password/farmer-change-password.component';
import { FarmerDeleteProfileComponent } from './component/farmer-my-account/farmer-delete-profile/farmer-delete-profile.component';

import { AadhaarComponent } from './component/farmer-authentication-authorization/aadhaar/aadhaar.component';
import { FarmerAuthenticationAuthorizationComponent } from './component/farmer-authentication-authorization/farmer-authentication-authorization.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';

const routes: Routes = [
{ path:'farmer/login',component:FarmerLoginComponent },
{ path:'farmer/dashboard',component:FarmerDashboardComponent },
{ path:'farmer/addProduct',component:FarmerAddProductComponent },
{ path:'farmer/bankDetails',component:FarmerBankDetailsComponent },
{ path:'farmer/currentOrder',component:FarmerCurrentOrderComponent },
{ path:'farmer/previousOrder',component:FarmerPreviousOrderComponent },
{ path:'farmer/viewProduct',component:FarmerViewProductComponent },
{ path:'farmer/myAccount',component:FarmerMyAccountComponent },
{ path:'farmer/authenticationAndAuthorization',component:FarmerAuthenticationAuthorizationComponent },
{ path:'farmer/forgetPassword',component:ForgetPasswordComponent },
{ path:'farmer/myAccount/addAddress',component:FarmerAddAddressComponent},
{ path:'farmer/myAccount/alternateMobile',component:FarmerAlternateMobileComponent},
{ path:'farmer/myAccount/changePassword',component:FarmerChangePasswordComponent},
{ path:'farmer/myAccount/deleteProfile',component:FarmerDeleteProfileComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports : [ RouterModule ],
})
export class FarmerRoutingModule { }
