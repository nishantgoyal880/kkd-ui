import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerLoginComponent } from './component/farmer-login/farmer-login.component';
import { FarmerRegisterComponent } from './component/farmer-authentication-authorization/farmer-register/farmer-register.component';
import { FarmerDashboardComponent } from './component/farmer-dashboard/farmer-dashboard.component';
import { FarmerMyAccountComponent } from './component/farmer-my-account/farmer-my-account.component';
import { FarmerAddProductComponent } from './component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import { FarmerBankDetailsComponent } from './component/farmer-dashboard/farmer-bank-details/farmer-bank-details.component';
import { FarmerCurrentOrderComponent } from './component/farmer-dashboard/farmer-current-order/farmer-current-order.component';
import { FarmerPreviousOrderComponent } from './component/farmer-dashboard/farmer-previous-order/farmer-previous-order.component';
import { FarmerViewProductComponent } from './component/farmer-dashboard/farmer-view-product/farmer-view-product.component';
import { FarmerComponent } from './farmer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AadhaarComponent } from './component/farmer-authentication-authorization/aadhaar/aadhaar.component';
import { FarmerAuthenticationAuthorizationComponent } from './component/farmer-authentication-authorization/farmer-authentication-authorization.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FarmerAddAddressComponent } from './component/farmer-my-account/farmer-add-address/farmer-add-address.component';
import { FarmerChangePasswordComponent } from './component/farmer-my-account/farmer-change-password/farmer-change-password.component';
import { FarmerAlternateMobileComponent } from './component/farmer-my-account/farmer-alternate-mobile/farmer-alternate-mobile.component';
import { FarmerDeleteProfileComponent } from './component/farmer-my-account/farmer-delete-profile/farmer-delete-profile.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CommonModule,
    FarmerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  }),
  HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
}),
  ],

  declarations: [FarmerLoginComponent, FarmerRegisterComponent,FarmerDashboardComponent,FarmerMyAccountComponent, FarmerAddProductComponent, FarmerBankDetailsComponent, FarmerCurrentOrderComponent, FarmerPreviousOrderComponent, FarmerViewProductComponent, FarmerComponent, AadhaarComponent, FarmerAuthenticationAuthorizationComponent, ForgetPasswordComponent,FarmerAddAddressComponent, FarmerChangePasswordComponent, FarmerAlternateMobileComponent, FarmerDeleteProfileComponent],

})
export class FarmerModule { }
