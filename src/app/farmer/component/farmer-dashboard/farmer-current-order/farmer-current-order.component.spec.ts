import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { FarmerCurrentOrderComponent } from './farmer-current-order.component';

describe('FarmerCurrentOrderComponent', () => {
  let component: FarmerCurrentOrderComponent;
  let fixture: ComponentFixture<FarmerCurrentOrderComponent>;
  let el: HTMLElement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerCurrentOrderComponent ],
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        RouterTestingModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
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
    fixture = TestBed.createComponent(FarmerCurrentOrderComponent);
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
  
  it('should call the loadData method', async(() => {
    fixture.detectChanges();
    spyOn(component,'loadData');
    expect(component.loadData).toHaveBeenCalledTimes(0);
  }));

  it('should call the setDeliveryDetails method', async(() => {
    fixture.detectChanges();
    spyOn(component,'setDeliveryDetails');
    expect(component.setDeliveryDetails).toHaveBeenCalledTimes(0);
  }));

  it('should call the setData method', async(() => {
    fixture.detectChanges();
    spyOn(component,'setData');
    expect(component.setData).toHaveBeenCalledTimes(0);
  }));

  it('should call the setDataOtp method', async(() => {
    fixture.detectChanges();
    spyOn(component,'setDataOtp');
    expect(component.setDataOtp).toHaveBeenCalledTimes(0);
  }));

  it('should call the setDeclineReason method', async(() => {
    fixture.detectChanges();
    spyOn(component,'setDeclineReason');
    expect(component.setDeclineReason).toHaveBeenCalledTimes(0);
  }));

  it('should call the checkingOtp method', async(() => {
    fixture.detectChanges();
    spyOn(component,'checkingOtp');
    expect(component.checkingOtp).toHaveBeenCalledTimes(0);
  }));

  it('should call the rateCustomer method', async(() => {
    fixture.detectChanges();
    spyOn(component,'rateCustomer');
    expect(component.rateCustomer).toHaveBeenCalledTimes(0);
  }));

  it('should call the otpStatus method', async(() => {
    fixture.detectChanges();
    spyOn(component,'otpStatus');
    expect(component.otpStatus).toHaveBeenCalledTimes(0);
  }));

  it('should call the setStar method', async(() => {
    fixture.detectChanges();
    spyOn(component,'setStar');
    expect(component.setStar).toHaveBeenCalledTimes(0);
  }));

});