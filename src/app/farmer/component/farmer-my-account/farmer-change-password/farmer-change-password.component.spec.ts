import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerChangePasswordComponent } from './farmer-change-password.component';

describe('FarmerChangePasswordComponent', () => {
  let component: FarmerChangePasswordComponent;
  let fixture: ComponentFixture<FarmerChangePasswordComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerChangePasswordComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerChangePasswordComponent);
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
    expect(e1.innerText).toEqual('Change Password');
  }));

  it('should call the resetPassword method', async(() => {
    fixture.detectChanges();
    spyOn(component,'resetPassword');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.resetPassword).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid', async(() => {
    component.rForm.controls['currentPassword'].setValue('');
    component.rForm.controls['newPassword'].setValue('');
    component.rForm.controls['reenterNewPassword'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.rForm.controls['currentPassword'].setValue('qwerty');
    component.rForm.controls['newPassword'].setValue('anu@123');
    component.rForm.controls['reenterNewPassword'].setValue('anu@123');
    expect(component.rForm.valid).toBeTruthy();
  }));
});