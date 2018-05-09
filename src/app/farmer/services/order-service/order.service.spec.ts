import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MOCKFARMER,
         MOCKFARMERADDRESS, 
         MOCKFARMERNEGATIVE,
         MOCKFARMERDELETE, 
         MOCKFARMERPASSWORD }
         from '../../mocks/farmerDetails.mocks';

import { OrderService } from './order.service';

describe('OrderService', () => {
  let mockFarmer:any;
  let mockFarmerAddress:any;
  let mockFarmerNegative:any;  
  let mockFarmerDelete:any;
  let mockFarmerNewPassword:any;
  let mockBackend: MockBackend
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [OrderService,
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
    mockFarmer=MOCKFARMER;
    mockFarmerAddress=MOCKFARMERADDRESS;
    mockFarmerNegative=MOCKFARMERNEGATIVE;
    mockFarmerDelete=MOCKFARMERDELETE;
    mockFarmerNewPassword=MOCKFARMERPASSWORD;
});

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('getPreviousOrderListFromFarmerId method should be created', inject([OrderService], (service: OrderService) => {
    expect(service.getPreviousOrderListFromFarmerId).toBeTruthy();
  }));

  it('getCurrentOrderListFromFarmerId method should be created', inject([OrderService], (service: OrderService) => {
    expect(service.getCurrentOrderListFromFarmerId).toBeTruthy();
  }));

  it('updateDeliveryDetails method should be created', inject([OrderService], (service: OrderService) => {
    expect(service.updateDeliveryDetails).toBeTruthy();
  }));

  it('updateDeclineReason method should be created', inject([OrderService], (service: OrderService) => {
    expect(service.updateDeclineReason).toBeTruthy();
  }));

  it('handleError method should be created', inject([OrderService], (service: OrderService) => {
    expect(service.handleError).toBeTruthy();
  }));

  it('should get Farmer\'s previous order list', async(inject([OrderService], (service: OrderService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getPreviousOrderListFromFarmerId('KKDFARM1000').subscribe(results=>{
       expect(results).toEqual(mockFarmer);
      });
  })));

  it('should not get Farmer\'s previous order list', async(inject([OrderService], (service: OrderService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getPreviousOrderListFromFarmerId('KKDFARM1008').subscribe(results=>{
       expect(results).not.toEqual(mockFarmerNegative);
      });
  })));

  it('should get Farmer\'s current order list', async(inject([OrderService], (service: OrderService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getCurrentOrderListFromFarmerId('KKDFARM1000').subscribe(results=>{
       expect(results).toEqual(mockFarmer);
      });
  })));

  it('should not get Farmer\'s current order lists', async(inject([OrderService], (service: OrderService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getCurrentOrderListFromFarmerId('KKDFARM1008').subscribe(results=>{
       expect(results).not.toEqual(mockFarmerNegative);
      });
  })));

  it('should update Farmer\'s delivery details', async(inject([OrderService], (service: OrderService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service. updateDeliveryDetails(mockFarmerAddress).subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not update Farmer\'s delivery details', async(inject([OrderService], (service: OrderService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service. updateDeliveryDetails(mockFarmerAddress).subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));

  it('should update Farmer\'s decline reason', async(inject([OrderService], (service: OrderService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service. updateDeliveryDetails(mockFarmerAddress).subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not update Farmer\'s decline reason', async(inject([OrderService], (service: OrderService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service. updateDeliveryDetails(mockFarmerAddress).subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));
});
