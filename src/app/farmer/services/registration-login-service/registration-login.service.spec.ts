import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { RegistrationLoginService } from './registration-login.service';

describe('RegistrationLoginService', () => {
  let mockBackend:MockBackend;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [RegistrationLoginService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }],
      imports : [HttpClientModule,HttpModule],
    });
    mockBackend = getTestBed().get(MockBackend);
});

  it('should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service).toBeTruthy();
  }));

  it('loginFarmer method should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service.loginFarmer).toBeTruthy();
  }));

  it('forgetPassword method should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service.forgetPassword).toBeTruthy();
  }));

  it('addhaarDataVerify method should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service.addhaarDataVerify).toBeTruthy();
  }));

  it('generateOtp method should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service.generateOtp).toBeTruthy();
  }));

  it('verifyOtp method should be created', inject([RegistrationLoginService], (service: RegistrationLoginService) => {
    expect(service.verifyOtp).toBeTruthy();
  }));

});

