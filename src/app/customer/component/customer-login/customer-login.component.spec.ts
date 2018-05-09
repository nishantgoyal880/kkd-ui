import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule, Http} from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { CustomerLoginComponent } from './customer-login.component';
import { IdRoleService } from '../../../services/id-role/id-role.service';


fdescribe('CustomerLoginComponent', () => {
  let component: CustomerLoginComponent;
  let fixture: ComponentFixture<CustomerLoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoginComponent ],
      providers: [ IdRoleService ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule, HttpModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
          deps: [Http]
      })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoginComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the loginCustomer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'loginCustomer');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.loginCustomer).toHaveBeenCalledTimes(0);
  }));

  //positive testcase for form
  it('form should be valid', async(() => {
    component.rForm.controls['mobileNo'].setValue('8987490752');
    component.rForm.controls['password'].setValue('Sapient@123');
    expect(component.rForm.valid).toBeTruthy();
  }));

  //negative testcase for form
  it('form should be valid', async(() => {
    component.rForm.controls['mobileNo'].setValue('');
    component.rForm.controls['password'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

});
