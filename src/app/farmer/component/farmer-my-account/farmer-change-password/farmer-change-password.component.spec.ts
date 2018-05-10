import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerChangePasswordComponent } from './farmer-change-password.component';

describe('FarmerChangePasswordComponent', () => {
  let component: FarmerChangePasswordComponent;
  let fixture: ComponentFixture<FarmerChangePasswordComponent>;
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
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(FarmerChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the ngOnInit method', async(() => {
    fixture.detectChanges();
    spyOn(component,'ngOnInit');
    expect(component.ngOnInit).toHaveBeenCalledTimes(0);
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