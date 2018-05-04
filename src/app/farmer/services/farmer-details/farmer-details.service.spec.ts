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
import { FarmerDetailsService } from './farmer-details.service';

fdescribe('FarmerDetailsService', () => {
  let mockFarmer:any;
  let mockFarmerAddress:any;
  let mockFarmerNegative:any;  
  let mockFarmerDelete:any;
  let mockFarmerNewPassword:any;
  let mockBackend: MockBackend
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [FarmerDetailsService,
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

  it('should be created', inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get Farmer Details', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getFarmerName('KKDFARM1000').subscribe(results=>{
       expect(results).toEqual(mockFarmer);
      });
  })));

  it('should not get Farmer Details', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        connection.mockRespond(new Response(
          new ResponseOptions({
              body: mockFarmer
            }
          )));
      });  
    service. getFarmerName('KKDFARM1008').subscribe(results=>{
       expect(results).not.toEqual(mockFarmerNegative);
      });
  })));

  it('should update Farmer Address', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service. updateFarmerAddress('1234567890',mockFarmerAddress).subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not update Farmer Address', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service. updateFarmerAddress('1234567890',mockFarmerAddress).subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));

  it('should update Farmer Mobile Number', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service. updateFarmerMobile('KKDFARM1000',mockFarmer).subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not update Farmer Mobile Number', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service. updateFarmerMobile('KKDFARM1000',mockFarmer).subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));

  it('should delete Farmer Profile', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    mockBackend.connections.subscribe(connection => {
     expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
       body:true
          })));
    });
    service. deleteFarmerProfile(mockFarmerDelete).subscribe(status=>{
      expect(status).toEqual(true);
    });
  })));
  
  it('should not delete Farmer Profile', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
    
    mockBackend.connections.subscribe(connection => {
    expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
       body:false
          })));
    });
    service. deleteFarmerProfile(mockFarmerDelete).subscribe(status=>{
    expect(status).not.toEqual(true);
    });
  })));

  it('should update Farmer Password', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:true
          })));
    });
    service. updatePassword(mockFarmerNewPassword).subscribe(status=>{
     expect(status).toEqual(true);
    });
  })));

  it('should not update Farmer Password', async(inject([FarmerDetailsService], (service: FarmerDetailsService) => {
 
    mockBackend.connections.subscribe(connection => {
      expect(connection.request.method).toBe(RequestMethod.Put);
      connection.mockRespond(new Response(new ResponseOptions({
        body:false
          })));
    });
    service. updatePassword(mockFarmerNewPassword).subscribe(status=>{
     expect(status).not.toEqual(true);
    });
  })));

});
