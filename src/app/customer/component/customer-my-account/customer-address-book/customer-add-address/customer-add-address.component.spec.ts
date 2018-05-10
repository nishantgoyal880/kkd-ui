import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule,Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../../../services/id-role/id-role.service'
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { CustomerAddAddressComponent } from './customer-add-address.component';

describe('CustomerAddAddressComponent', () => {
  let component: CustomerAddAddressComponent;
  let fixture: ComponentFixture<CustomerAddAddressComponent>;
  let el:HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddAddressComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          provide: TranslateLoader,
          useFactory: (http: Http) => new TranslateStaticLoader(http, 'public/assets/i18n', '.json'),
          deps: [Http]
      })
      ],
      providers:[IdRoleService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the updateCustomerAddress method', async(() => {
    fixture.detectChanges();
    spyOn(component,'updateCustomerAddress');
    expect(component.updateCustomerAddress).toHaveBeenCalledTimes(0);
  }));

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
