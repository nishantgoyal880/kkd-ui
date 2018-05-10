import { TestBed, inject, getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, BaseRequestOptions, Response, Http, XHRBackend, RequestMethod } from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { MOCKFARMERPRODUCT, MOCKFARMERPRODUCTNEGATIVE } from '../../mocks/farmerDetails.mocks';
import { FarmerViewProductService } from './farmer-view-product.service';

describe('FarmerViewProductService', () => {
  let mockFarmerProduct: any;
  let mockFarmerProductNegative: any;
  let mockBackend: MockBackend;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [FarmerViewProductService,
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
      imports: [HttpClientModule, HttpModule],
    });
    mockBackend = getTestBed().get(MockBackend);
    mockFarmerProduct = MOCKFARMERPRODUCT;
    mockFarmerProductNegative = MOCKFARMERPRODUCTNEGATIVE;
  });

  it('should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service).toBeTruthy();
  }));

  // test-case for getAllProducts method
  it('getAllProducts method should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service.getAllProducts).toBeTruthy();
  }));

  // test-case for deleteParticularProduct method
  it('deleteParticularProduct method should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service.deleteParticularProduct).toBeTruthy();
  }));

  // test-case for update method
  it('update method should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service.update).toBeTruthy();
  }));

  // test-case for handleError method
  it('handleError method should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service.handleError).toBeTruthy();
  }));

  // test-case for getAllProducts method
  it('should get Particular Farmer Products', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: mockFarmerProduct
          }
          )));
      });
    service.getAllProducts('KKDFARM1000').subscribe(results => {
      expect(results).toEqual(mockFarmerProduct);
    });
  })));

  // negative test-case for getAllProducts method
  it('should not get Particular Farmer Products', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: mockFarmerProduct
          }
          )));
      });
    service.getAllProducts('KKDFARM1000').subscribe(results => {
      expect(results).not.toEqual(mockFarmerProductNegative);
    });
  })));

  // test-case for delete method
  it('should delete Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body: true
      })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status => {
      expect(status).toEqual(true);
    });
  })));

  // negative test-case for delete method
  it('should not delete Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body: false
      })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status => {
      expect(status).not.toEqual(true);
    });
  })));

  // test-case for update method
  it('should update Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockFarmerProduct
      })));
    });
    service.update('KKDFARM1000').subscribe(status => {
      expect(status).toEqual(mockFarmerProduct);
    });
  })));

  // negative test-case for update method
  it('should not update Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockFarmerProduct
      })));
    });
    service.update('KKDFARM1000').subscribe(status => {
      expect(status).not.toEqual(mockFarmerProductNegative);
    });
  })));

  // test-case for save method
  it('should save Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body: true
      })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status => {
      expect(status).toEqual(true);
    });
  })));

  // negative test-case for save method
  it('should not save Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body: false
      })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status => {
      expect(status).not.toEqual(true);
    });
  })));

});