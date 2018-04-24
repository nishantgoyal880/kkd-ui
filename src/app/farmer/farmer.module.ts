import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './component/farmer-authentication-authorization/farmer-register/farmer-register.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent } from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent } from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerComponent } from './farmer.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';


=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AadhaarComponent } from './component/farmer-authentication-authorization/aadhaar/aadhaar.component';
import { FarmerAuthenticationAuthorizationComponent } from './component/farmer-authentication-authorization/farmer-authentication-authorization.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerHeaderComponent } from './component/farmer-header/farmer-header.component';
import { FarmerCommonHeaderComponent } from './component/farmer-common-header/farmer-common-header.component';
>>>>>>> aca43bac10d98e8f2ede41b06ed7e5b00b146ff3


@NgModule({
  imports: [
    CommonModule,
    FarmerRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    ReactiveFormsModule
>>>>>>> aca43bac10d98e8f2ede41b06ed7e5b00b146ff3
  ],

  declarations: [FarmerLoginComponent, FarmerRegisterComponent,FarmerDashboardComponent, FarmerHeaderComponent, FarmerMyAccountComponent, FarmerAddProductComponent, FarmerBankDetailsComponent, FarmerCurrentOrderComponent, FarmerPreviousOrderComponent, FarmerViewProductComponent, FarmerComponent, AadhaarComponent, FarmerAuthenticationAuthorizationComponent, ForgetPasswordComponent,FarmerCommonHeaderComponent],

})
export class FarmerModule { }
