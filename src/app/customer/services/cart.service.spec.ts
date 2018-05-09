import { CartService } from './cart.service';
import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { CUSTOMERDETAILS, CUSTOMERDETAILSNEGATIVE } from '../component/customer-my-account/mock-data'

describe('CartService', () => {
  let mockCustomer:any;
  let mockCustomerNegative:any;
  let mockBackend: MockBackend
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [CartService,
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
    mockCustomer=CUSTOMERDETAILS;
     mockCustomerNegative=CUSTOMERDETAILSNEGATIVE;
});

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('getCartItems method should be created', inject([CartService], (service: CartService) => {
    expect(service.getCartItems).toBeTruthy();
  }));

  it('deleteCartItem method should be created', inject([CartService], (service: CartService) => {
    expect(service.deleteCartItem).toBeTruthy();
  }));

  it('postOrder method should be created', inject([CartService], (service: CartService) => {
    expect(service.postOrder).toBeTruthy();
  }));

  it('getCustomerInfo method should be created', inject([CartService], (service: CartService) => {
    expect(service.getCustomerInfo).toBeTruthy();
  }));

  it('deleteAllCartItems method should be created', inject([CartService], (service: CartService) => {
    expect(service.deleteAllCartItems).toBeTruthy();
  }));

  it('should get Customer\'s cart items', async(inject([CartService], (service: CartService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockCustomer
            }
          )));
      });  
    service. getCartItems('KKDCUST1000').subscribe(results=>{
       expect(results).toEqual(mockCustomer);
      });
  })));

  it('should not get Customer\'s cart items', async(inject([CartService], (service: CartService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockCustomer
            }
          )));
      });  
    service. getCartItems('KKDCUST1008').subscribe(results=>{
       expect(results).not.toEqual(mockCustomerNegative);
      });
  })));

  it('should get Customer\'s details', async(inject([CartService], (service: CartService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockCustomer
            }
          )));
      });  
    service. getCustomerInfo('KKDCUST1000').subscribe(results=>{
       expect(results).toEqual(mockCustomer);
      });
  })));

  it('should not get Customer\'s details', async(inject([CartService], (service: CartService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockCustomer
            }
          )));
      });  
    service. getCustomerInfo('KKDCUST1008').subscribe(results=>{
       expect(results).not.toEqual(mockCustomerNegative);
      });
  })));

  // it('should delete Customer\'s cart item', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Delete);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:{}
  //         })));
  //   });
  //   service. deleteCartItem(mockCustomerAddress).subscribe(status=>{
  //    expect(status).toEqual({});
  //   });
  // })));

  // it('should not delete Customer\'s cart item', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Delete);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:{}
  //         })));
  //   });
  //   service. deleteCartItem(mockCustomerAddress).subscribe(status=>{
  //    expect(status).not.toEqual(true);
  //   });
  // })));

  // it('should post Customer\'s orders', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Put);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:true
  //         })));
  //   });
  //   service. postOrder(mockCustomerAddress).subscribe(status=>{
  //    expect(status).toEqual(true);
  //   });
  // })));

  // it('should not post Customer\'s orders', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Put);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:false
  //         })));
  //   });
  //   service. postOrder(mockCustomerAddress).subscribe(status=>{
  //    expect(status).not.toEqual(true);
  //   });
  // })));

  // it('should delete Customer\'s all cart items', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Put);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:true
  //         })));
  //   });
  //   service. deleteAllCartItems(mockCustomerAddress).subscribe(status=>{
  //    expect(status).toEqual(true);
  //   });
  // })));

  // it('should not delete Customer\'s all cart items', async(inject([CartService], (service: CartService) => {
 
  //   mockBackend.connections.subscribe(connection => {
  //     expect(connection.request.method).toBe(RequestMethod.Put);
  //     connection.mockRespond(new Response(new ResponseOptions({
  //       body:false
  //         })));
  //   });
  //   service. deleteAllCartItems(mockCustomerAddress).subscribe(status=>{
  //    expect(status).not.toEqual(true);
  //   });
  // })));
});

