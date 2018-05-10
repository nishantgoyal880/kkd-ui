import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpModule,Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import {IdRoleService} from '../../../../services/id-role/id-role.service'
import { CustomerCurrentOrderComponent } from './customer-current-order.component';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { NgxPaginationModule } from 'ngx-pagination';

describe('CustomerCurrentOrderComponent', () => {
  let component: CustomerCurrentOrderComponent;
  let fixture: ComponentFixture<CustomerCurrentOrderComponent>;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCurrentOrderComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        NgxPaginationModule,
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
    fixture = TestBed.createComponent(CustomerCurrentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the getdata method', async(() => {
    fixture.detectChanges();
    spyOn(component,'getdata');
    expect(component.getdata).toHaveBeenCalledTimes(0);
  }));
});
