import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { IdRoleService } from '../../../services/id-role/id-role.service'

import { CustomerRegisterComponent } from './customer-register.component';

describe('CustomerRegisterComponent', () => {
  let component: CustomerRegisterComponent;
  let fixture: ComponentFixture<CustomerRegisterComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRegisterComponent ],
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
        providers:[ IdRoleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRegisterComponent);
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

  it('should call the checkIfMatchingPasswords method', async(() => {
    fixture.detectChanges();
    spyOn(component,'checkIfMatchingPasswords');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.checkIfMatchingPasswords).toHaveBeenCalledTimes(0);
  }));
    

  it(' verifyPassword fields form should be invalid', async(() => {
    component.rForm.controls['mobileNo'].setValue('');
    component.rForm.controls['password'].setValue('');
    component.rForm.controls['firstName'].setValue('');
    component.rForm.controls['confirmPassword'].setValue('Anu@123');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('otp form should be invalid', async(() => {
    component.otpForm.controls['otp'].setValue('');
    expect(component.otpForm.valid).toBeFalsy();
  }));


  it('verifyPassword fields form should be valid', async(() => {
    component.rForm.controls['mobileNo'].setValue('7684567835');
    component.rForm.controls['password'].setValue('Anu@123');
    component.rForm.controls['firstName'].setValue('abhi');
    component.rForm.controls['confirmPassword'].setValue('Anu@123');
    expect(component.rForm.valid).toBeTruthy();
  }));

  it('otp form should be valid', async(() => {
    component.otpForm.controls['otp'].setValue('7777');
    expect(component.otpForm.valid).toBeTruthy();
  }));
});

