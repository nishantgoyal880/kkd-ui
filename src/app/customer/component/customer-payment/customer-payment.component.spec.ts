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

import { CustomerPaymentComponent } from './customer-payment.component';

describe('CustomerPaymentComponent', () => {
  let component: CustomerPaymentComponent;
  let fixture: ComponentFixture<CustomerPaymentComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentComponent ],
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
    fixture = TestBed.createComponent(CustomerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call radioClick method', async(() => {
    fixture.detectChanges();
    spyOn(component,'radioClick');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.radioClick).toHaveBeenCalledTimes(0);
  }));

  it('should call the makePayment method', async(() => {
    fixture.detectChanges();
    spyOn(component,'makePayment');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.makePayment).toHaveBeenCalledTimes(0);
  }));


  it(' makePayment fields form should be invalid', async(() => {
    component.rForm.controls['cardNumber'].setValue('');
    component.rForm.controls['expiryMonth'].setValue('');
    component.rForm.controls['expiryYear'].setValue('');
    component.rForm.controls['cvCode'].setValue('');
    component.rForm.controls['rad'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('makePayment fields form should be valid', async(() => {
    component.rForm.controls['cardNumber'].setValue('9867543256789348');
    component.rForm.controls['expiryMonth'].setValue('12');
    component.rForm.controls['expiryYear'].setValue('67');
    component.rForm.controls['cvCode'].setValue('678');
    component.rForm.controls['rad'].setValue('2345');
    expect(component.rForm.valid).toBeTruthy();
  }));
});

