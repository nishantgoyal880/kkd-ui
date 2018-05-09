import { ForgetPasswordComponent } from './forget-password.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrationLoginService } from '../../services/registration-login-service/registration-login.service';
import { IdRoleService } from '../../../services/id-role/id-role.service'

describe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;
  let el: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgetPasswordComponent ],
      imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule,
      RouterTestingModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
        deps: [Http]
      })
      ],
      providers:[ IdRoleService,RegistrationLoginService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the send farmer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'sendOtp');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.sendOtp).toHaveBeenCalledTimes(0);
  }));

  it('should call the verifyOtp method', async(() => {
    fixture.detectChanges();
    spyOn(component,'verifyOtp');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.verifyOtp).toHaveBeenCalledTimes(0);
  }));

  it('should call the resetPasswordFarmer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'resetPasswordFarmer');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.resetPasswordFarmer).toHaveBeenCalledTimes(0);
  }));


  it(' newPassword form should be invalid', async(() => {
    component.newPasswordForm.controls['password'].setValue('');
    component.newPasswordForm.controls['confirmPassword'].setValue('');
    expect(component.newPasswordForm.valid).toBeFalsy();
  }));

  it('otp form should be invalid', async(() => {
    component.otpForm.controls['otp'].setValue('');
    expect(component.otpForm.valid).toBeFalsy();
  }));

  it('form should be invalid', async(() => {
    component.numberForm.controls['mobileNo'].setValue('');
    expect(component.numberForm.valid).toBeFalsy();
  }));

  it('newPassword form should be valid', async(() => {
    component.newPasswordForm.controls['password'].setValue('qwerty');
    component.newPasswordForm.controls['confirmPassword'].setValue('qwerty');
    expect(component.newPasswordForm.valid).toBeTruthy();
  }));

  it('otp form should be valid', async(() => {
    component.otpForm.controls['otp'].setValue('7777');
    expect(component.otpForm.valid).toBeTruthy();
  }));

  it('form should be valid', async(() => {
    component.numberForm.controls['mobileNo'].setValue('9468075105');
    expect(component.numberForm.valid).toBeTruthy();
  }));
});

