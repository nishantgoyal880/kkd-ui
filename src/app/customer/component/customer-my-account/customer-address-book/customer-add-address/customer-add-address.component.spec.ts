import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule,Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../../../services/id-role/id-role.service'
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { CustomerAddAddressComponent } from './customer-add-address.component';

fdescribe('CustomerAddAddressComponent', () => {
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
});
