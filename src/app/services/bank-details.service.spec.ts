import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { BankDetailsService } from './bank-details.service';

describe('BankDetailsService', () => {
  let mockBackend:MockBackend;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [BankDetailsService,
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


  it('should be created', inject([BankDetailsService], (service: BankDetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('saveAccountDetails method should be created', inject([BankDetailsService], (service: BankDetailsService) => {
    expect(service.saveAccountDetails).toBeTruthy();
  }));
});
