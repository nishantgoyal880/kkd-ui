import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerDeleteProfileComponent } from './farmer-delete-profile.component';

describe('FarmerDeleteProfileComponent', () => {
  let component: FarmerDeleteProfileComponent;
  let fixture: ComponentFixture<FarmerDeleteProfileComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDeleteProfileComponent ],
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
    fixture = TestBed.createComponent(FarmerDeleteProfileComponent);
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

  it('should call the sendOtp method', async(() => {
    fixture.detectChanges();
    spyOn(component,'sendOtp');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.sendOtp).toHaveBeenCalledTimes(0);
  }));

  it('should call the sendOtp method', async(() => {
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

  it('To send otp form should be valid', async(() => {
    component.rForm.controls['mobileNo'].setValue('9875326475');
    component.rForm.controls['currentPassword'].setValue('qwerty');
    expect(component.rForm.valid).toBeTruthy();
  }));

  it('To send otp form should be valid', async(() => {
    component.otpForm.controls['otp'].setValue('9545');
    expect(component.otpForm.valid).toBeTruthy();
  }));

});