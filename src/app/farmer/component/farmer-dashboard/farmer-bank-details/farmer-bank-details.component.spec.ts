import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from "ng2-translate";
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { FarmerBankDetailsComponent } from './farmer-bank-details.component';
import { BankDetailsService } from '../../../../services/bank-details.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service';

describe('FarmerBankDetailsComponent', () => {
  let component: FarmerBankDetailsComponent;
  let fixture: ComponentFixture<FarmerBankDetailsComponent>;
  let debug: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerBankDetailsComponent ],
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
      providers: [BankDetailsService,
                     IdRoleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerBankDetailsComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css('form'));
    el = debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the addBankDetails method', async(() => {
   fixture.detectChanges();
   spyOn(component, 'addBankDetails');
   el = fixture.debugElement.query(By.css('button')).nativeElement;
   el.click();
    expect(component.addBankDetails).toHaveBeenCalledTimes(0);
 }));

 it('form should be invalid', async(() => {
   component.rForm.controls['accountNo'].setValue('');
   component.rForm.controls['accountName'].setValue('');
   component.rForm.controls['ifscCode'].setValue('');
   expect(component.rForm.valid).toBeFalsy();
 }));

 it('form should be valid', async(() => {
   component.rForm.controls['accountNo'].setValue('123456789123');
   component.rForm.controls['accountName'].setValue('Pappu');
   component.rForm.controls['ifscCode'].setValue('SBIN00325');
   expect(component.rForm.valid).toBeTruthy();
 }));
});
