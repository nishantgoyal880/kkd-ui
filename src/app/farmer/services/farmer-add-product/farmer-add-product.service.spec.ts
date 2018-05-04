
import { FarmerAddProductService } from './farmer-add-product.service';
import {FarmerAddProductComponent } from '../../component/farmer-dashboard/farmer-add-product/farmer-add-product.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {PRODUCTDETAILS} from '../farmer-add-product/mock-addProduct-data';
import 'rxjs/add/observable/throw';
import {
  TestBed,
  getTestBed,
  async,
  inject
} from '@angular/core/testing';
import {
  Headers, BaseRequestOptions,
  Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';

import {ResponseOptions} from '@angular/http';


fdescribe('FarmerAddProductService', () => {
  let mockBackend: MockBackend;
  let productDetails: any;

  let service: FarmerAddProductService;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [FarmerAddProductService,
        MockBackend,BaseRequestOptions,
        {
        provide: Http,
        deps: [MockBackend, BaseRequestOptions],
        useFactory:
          (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
     }],
      imports: [ 
        HttpClientTestingModule,
      HttpClientModule,
    HttpModule]
    });
    mockBackend = getTestBed().get(MockBackend);

    service = TestBed.get(FarmerAddProductService);
    productDetails = PRODUCTDETAILS;
  });

  it('should be created', inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    expect(service).toBeTruthy();
  }));

  it('should have update function',
  inject([FarmerAddProductService], (service: FarmerAddProductService)=>{
    expect(service.update).toBeTruthy();
  }));

  it('should insert new product', async(inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      connection.mockRespond(new Response(new ResponseOptions({
        //status: 201,
        body: true
        })));
    });  
    service.update("KKDFARM1002", productDetails).subscribe(
      status => {
        //expect(successResult).toBeDefined();
        expect(status).toEqual(true);
      });
  })));

  it('should not insert new product', async(inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Post);
      connection.mockRespond(new Response(new ResponseOptions({
        //status: 201,
        body: false
        })));
    });  
    service.update("KKDFARM1002", productDetails).subscribe(
      status => {
        //expect(successResult).toBeDefined();
        expect(status).not.toEqual(true);
      });
  })));

  /*it('correctly handles error', inject([FarmerAddProductService], (service: FarmerAddProductService) => {
    const spy = spyOn(console, 'log');
    const error: Error = new Error('ERROR');
    service.handleError(error);
    expect(spy).toHaveBeenCalledWith(error);
  }));*/

});
