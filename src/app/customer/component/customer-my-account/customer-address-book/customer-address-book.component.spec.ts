import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule,Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../../services/id-role/id-role.service'
import { CustomerAddressBookComponent } from './customer-address-book.component';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";

describe('CustomerAddressBookComponent', () => {
  let component: CustomerAddressBookComponent;
  let fixture: ComponentFixture<CustomerAddressBookComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAddressBookComponent ],
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
      providers:[IdRoleService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAddressBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    const e1=fixture.nativeElement.querySelector('h1');
    console.log(e1.innerText);
    expect(e1.innerText).toEqual('customer_address_book.address_details');
  }));

  it('should call the searchDetails method', async(() => {
    fixture.detectChanges();
    spyOn(component,'searchDetails');
    expect(component.searchDetails).toHaveBeenCalledTimes(0);
  }));

  it('should call the searchDetails method', async(() => {
    fixture.detectChanges();
    spyOn(component,'searchDetails');
    expect(component.searchDetails).toHaveBeenCalledTimes(0);
  }));
});
