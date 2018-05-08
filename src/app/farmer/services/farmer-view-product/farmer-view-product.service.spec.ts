import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {MOCKFARMERPRODUCT,MOCKFARMERPRODUCTNEGATIVE} from '../../mocks/farmerDetails.mocks';
import { FarmerViewProductService } from './farmer-view-product.service';

describe('FarmerViewProductService', () => {
  let mockFarmerProduct:any;
//  let mockFarmerAddress:any;
  let mockFarmerProductNegative:any;  
//  let mockFarmerDelete:any;
//  let mockFarmerNewPassword:any;
 let mockBackend: MockBackend;
 beforeEach(async() => {
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
    imports : [HttpClientModule,HttpModule],
  });
  mockBackend = getTestBed().get(MockBackend);
  mockFarmerProduct=MOCKFARMERPRODUCT;
  // mockFarmerAddress=MOCKFARMERADDRESS;
  mockFarmerProductNegative=MOCKFARMERPRODUCTNEGATIVE;
  // mockFarmerDelete=MOCKFARMERDELETE;
  // mockFarmerNewPassword=MOCKFARMERPASSWORD;
});

  it('should be created', inject([FarmerViewProductService], (service: FarmerViewProductService) => {
    expect(service).toBeTruthy();
  }));


 it('should get Particular Farmer Products', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {
   mockBackend.connections.subscribe(
     (connection: MockConnection) => {
       connection.mockRespond(new Response(
         new ResponseOptions({
             body: mockFarmerProduct
           }
         )));
     });  
   service. getAllProducts('KKDFARM1000').subscribe(results=>{
      expect(results).toEqual(mockFarmerProduct);
     });
 })));

 it('should not get Particular Farmer Products', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: mockFarmerProduct
          }
        )));
    });  
  service. getAllProducts('KKDFARM1000').subscribe(results=>{
     expect(results).not.toEqual(mockFarmerProductNegative);
    });
})));

it('should delete Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

     mockBackend.connections.subscribe(connection => {
       expect(connection.request.method).toBe(RequestMethod.Delete);
       connection.mockRespond(new Response(new ResponseOptions({
         body:true
           })));
     });
     service.deleteParticularProduct('KKDPROD3000').subscribe(status=>{
      expect(status).toEqual(true);
     });
   })));

   it('should not delete Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));

  it('should update Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:mockFarmerProduct
          })));
    });
    service.update('KKDFARM1000').subscribe(status=>{
     expect(status).toEqual(mockFarmerProduct);
    });
  })));

  it('should not update Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:mockFarmerProduct
          })));
    });
    service.update('KKDFARM1000').subscribe(status=>{
     expect(status).not.toEqual(mockFarmerProductNegative);
    });
  })));

  it('should save Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Delete);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service.deleteParticularProduct('KKDPROD3000').subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not save Farmer Product', async(inject([FarmerViewProductService], (service: FarmerViewProductService) => {

   mockBackend.connections.subscribe(connection => {
     expect(connection.request.method).toBe(RequestMethod.Delete);
     connection.mockRespond(new Response(new ResponseOptions({
       body:false
         })));
   });
   service.deleteParticularProduct('KKDPROD3000').subscribe(status=>{
    expect(status).not.toEqual(true);
   });
 })));

  // it('should update Farmer Address', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {

  //      mockBackend.connections.subscribe(connection => {
  //        expect(connection.request.method).toBe(RequestMethod.Put);
  //        connection.mockRespond(new Response(new ResponseOptions({
  //          body:true
  //            })));
  //      });
  //      service. updateFarmerAddress('1234567890',mockFarmerAddress).subscribe(status=>{
  //       expect(status).toEqual(true);
  //      });
  //    })));

//  it('should not get Farmer Details', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
//    mockBackend.connections.subscribe(
//      (connection: MockConnection) => {
//        connection.mockRespond(new Response(
//          new ResponseOptions({
//              body: mockFarmer
//            }
//          )));
//      });  
//    service. getFarmerName('KKDFARM1008').subscribe(results=>{
//       expect(results).not.toEqual(mockFarmerNegative);
//      });
//  })));

//  it('should update Farmer Address', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {

//    mockBackend.connections.subscribe(connection => {
//      expect(connection.request.method).toBe(RequestMethod.Put);
//      connection.mockRespond(new Response(new ResponseOptions({
//        body:true
//          })));
//    });
//    service. updateFarmerAddress('1234567890',mockFarmerAddress).subscribe(status=>{
//     expect(status).toEqual(true);
//    });
//  })));

//  it('should not update Farmer Address', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {

//    mockBackend.connections.subscribe(connection => {
//      expect(connection.request.method).toBe(RequestMethod.Put);
//      connection.mockRespond(new Response(new ResponseOptions({
//        body:false
//          })));
//    });
//    service. updateFarmerAddress('1234567890',mockFarmerAddress).subscribe(status=>{
//     expect(status).not.toEqual(true);
//    });
//  })));

});