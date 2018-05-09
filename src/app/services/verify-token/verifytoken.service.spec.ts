import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { VerifytokenService } from './verifytoken.service';

describe('VerifytokenService', () => {
  let mockBackend:MockBackend;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [VerifytokenService,
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

  it('should be created', inject([VerifytokenService], (service: VerifytokenService) => {
    expect(service).toBeTruthy();
  }));

  it('verifyToken method should be created', inject([VerifytokenService], (service: VerifytokenService) => {
    expect(service.verifyToken).toBeTruthy();
  }));
});
