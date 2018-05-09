import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { SupportService } from './support.service';

describe('SupportService', () => {
  let mockBackend:MockBackend;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [SupportService,
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

  it('should be created', inject([SupportService], (service: SupportService) => {
    expect(service).toBeTruthy();
  }));

  it('addNewIssue method should be created', inject([SupportService], (service: SupportService) => {
    expect(service.addNewIssue).toBeTruthy();
  }));
});
