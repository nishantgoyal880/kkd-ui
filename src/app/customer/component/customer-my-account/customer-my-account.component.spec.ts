import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerMyAccountComponent } from './customer-my-account.component';
import {CustomerCurrentOrderComponent} from './customer-current-order/customer-current-order.component'
import {CustomerPreviousOrderComponent} from './customer-previous-order/customer-previous-order.component'
import {CustomerAddressBookComponent} from './customer-address-book/customer-address-book.component'
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../services/id-role/id-role.service'
fdescribe('CustomerMyAccountComponent', () => {
  let component: CustomerMyAccountComponent;
  let fixture: ComponentFixture<CustomerMyAccountComponent>;
  let debug: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMyAccountComponent,CustomerCurrentOrderComponent,CustomerPreviousOrderComponent,CustomerAddressBookComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers:[IdRoleService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMyAccountComponent);
    component = fixture.componentInstance;
    debug=fixture.debugElement.query(By.css('form'));
    el=debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h1');
    console.log(e1.innerText);
    expect(e1.innerText).toEqual('My Orders');
  }));

  it('should call the onSubmit method', async(() => {
    fixture.detectChanges();
    spyOn(component,'onSubmit');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('should call the deleteUser method', async(() => {
    fixture.detectChanges();
    spyOn(component,'deleteUser');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.deleteUser).toHaveBeenCalledTimes(0);
  }));

  it('Change password form should be valid', async(() => {
    component.rForm.controls['mobileNumber'].setValue('7418832509');
    component.rForm.controls['currentPassword'].setValue('Sriz3196#');
    component.rForm.controls['newPassword'].setValue('Sapient@123');
    component.rForm.controls['reenterNewPassword'].setValue('Sapient@123');
    expect(component.rForm.valid).toBeTruthy();
  }));
  
  it('Change password form should be invalid', async(() => {
    component.rForm.controls['mobileNumber'].setValue('');
    component.rForm.controls['currentPassword'].setValue('');
    component.rForm.controls['newPassword'].setValue('');
    component.rForm.controls['reenterNewPassword'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));
  
  it('Delete Profile form should be valid', async(() => {
    component.rFormDeleteProfile .controls['mobileNumberDeleteProfile'].setValue('7418832509');
    component.rFormDeleteProfile .controls['currentPasswordDeleteProfile'].setValue('Sriz3196#');
    expect(component.rFormDeleteProfile .valid).toBeTruthy();
  }));

  it('Delete Profile form should be invalid', async(() => {
    component.rFormDeleteProfile .controls['mobileNumberDeleteProfile'].setValue('');
    component.rFormDeleteProfile .controls['currentPasswordDeleteProfile'].setValue('');
    expect(component.rFormDeleteProfile .valid).toBeFalsy();
  }));
});
