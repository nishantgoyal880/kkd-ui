import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerLoginComponent } from './component/customer-login/customer-login.component';
import { CustomerRegisterComponent } from './component/customer-register/customer-register.component';
import { CustomerHeaderComponent } from './component/customer-header/customer-header.component';
import { CustomerMyCartComponent } from './component/customer-my-cart/customer-my-cart.component';
import { CustomerHomePageComponent } from './component/customer-home-page/customer-home-page.component';
import { CustomerMyAccountComponent } from './component/customer-my-account/customer-my-account.component';
import { CustomerAddressBookComponent } from './component/customer-my-account/customer-address-book/customer-address-book.component';
import { CustomerCurrentOrderComponent } from './component/customer-my-account/customer-current-order/customer-current-order.component';
import { CustomerPreviousOrderComponent } from './component/customer-my-account/customer-previous-order/customer-previous-order.component';
import { CustomerComponent } from './customer.component';
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'
import { IonRangeSliderModule } from 'ng2-ion-range-slider';
import { CustomerCommonHeaderComponent } from './component/customer-common-header/customer-common-header.component';
import { CustomerAddAddressComponent } from './component/customer-my-account/customer-address-book/customer-add-address/customer-add-address.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    IonRangeSliderModule,
    SweetAlert2Module,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  declarations: [CustomerLoginComponent, CustomerRegisterComponent, CustomerHeaderComponent, CustomerMyCartComponent, CustomerHomePageComponent, CustomerMyAccountComponent, CustomerAddressBookComponent, CustomerCurrentOrderComponent, CustomerPreviousOrderComponent, CustomerComponent, ForgetPasswordComponent,CustomerCommonHeaderComponent, CustomerAddAddressComponent]

})
export class CustomerModule { }
