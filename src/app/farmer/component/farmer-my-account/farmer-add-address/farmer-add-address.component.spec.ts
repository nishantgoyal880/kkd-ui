import { async,fakeAsync, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FarmerAddAddressComponent } from './farmer-add-address.component';
import swal from 'sweetalert2';

describe('FarmerAddAddressComponent', () => {
  let component: FarmerAddAddressComponent;
  let fixture: ComponentFixture<FarmerAddAddressComponent>;
  let el: HTMLElement;
  let comp:any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAddAddressComponent ],
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
    fixture = TestBed.createComponent(FarmerAddAddressComponent);
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

  it('should call the updateFarmerAddress method',() => { 
    spyOn(component,'updateFarmerAddress');
    el=fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.updateFarmerAddress).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid',() => {
    component.rForm.controls['addressLine'].setValue('');
    component.rForm.controls['city'].setValue('');
    component.rForm.controls['district'].setValue('');
    component.rForm.controls['state'].setValue('');
    component.rForm.controls['pincode'].setValue('');
    expect(component.rForm.valid).toBeFalsy();
  });

  it('form should be valid',() => {
    component.rForm.controls['addressLine'].setValue('subhash nagar');
    component.rForm.controls['city'].setValue('bhilai');
    component.rForm.controls['district'].setValue('durg');
    component.rForm.controls['state'].setValue('chattisgarh');
    component.rForm.controls['pincode'].setValue('234567');
    expect(component.rForm.valid).toBeTruthy();
  });

});
