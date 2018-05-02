import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home-page/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BodyComponent } from './shared/body/body.component';
import { HelpComponent } from './shared/help/help.component';
import { SupportComponent } from './shared/support/support.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { PoliciesComponent } from './shared/policies/policies.component';
import { ConnectUsComponent } from './shared/connect-us/connect-us.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerModule } from './customer/customer.module';
import { FarmerModule } from './farmer/farmer.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { IdRoleService } from './services/id-role/id-role.service'
import { NgxPermissionsModule } from 'ngx-permissions';
import { DemoComponent } from './demo/demo.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
  AppComponent,
  HeaderComponent,
  FooterComponent,
  BodyComponent,
  HelpComponent,
  SupportComponent,
  AboutUsComponent,
  PoliciesComponent,
  ConnectUsComponent,
  HomePageComponent,
  DemoComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  CustomerModule,
  FarmerModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
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
NgxPermissionsModule.forRoot()
],
 providers:[IdRoleService],
  bootstrap: [AppComponent]
})

export class AppModule { }
