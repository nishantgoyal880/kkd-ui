import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { CustomerAuthenticationService } from './customer-authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Customer} from '../component/customer-my-account/customer';
import { Observable } from 'rxjs/Observable';
import {DETAILS,CUSTOMERDETAILSNEGATIVE,CURRENTORDERSNEGATIVE,PREVIOUSORDERSNEGATIVE,NEGATIVEDETAILS,USERDETAILS,USERDETAILSDELETE,CURRENTORDERS,PREVIOUSORDERS,CUSTOMERDETAILS} from '../component/customer-my-account/mock-data';
import {Headers, BaseRequestOptions,Response,Http, XHRBackend, RequestMethod} from '@angular/http';
import {ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
fdescribe('CustomerAuthenticationService', () => {
  let details :any;
  let userDetails :any;
  let userDetailsDelete :any;
  let currentOrders : any;
  let previousOrders:any;
  let customerDetails :any;
  let mockBackend: MockBackend;
  let negativeDetails:any;
  let currentOrdersNegative:any;
  let previousOrdersNegative:any;
  let customerDetailsNegative:any;
  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthenticationService,
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
    details =DETAILS;
    userDetails=USERDETAILS;
    userDetailsDelete=USERDETAILSDELETE;
    currentOrders=CURRENTORDERS;
    previousOrders=PREVIOUSORDERS;
    customerDetails=CUSTOMERDETAILS;
    negativeDetails=NEGATIVEDETAILS;
    currentOrdersNegative=CURRENTORDERSNEGATIVE;
    previousOrdersNegative=PREVIOUSORDERSNEGATIVE;
    customerDetailsNegative=CUSTOMERDETAILSNEGATIVE;
});

  it('should be created', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have handleError function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.handleError).toBeTruthy();
  }));

  it('should have getUserDetails function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.getUserDetails).toBeTruthy();
  }));

  it('should have updatePassword function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.updatePassword).toBeTruthy();
  }));

 it('should have deleteProfile function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.deleteProfile).toBeTruthy();
  }));

  it('should have getCurrentOrders function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.getCurrentOrders).toBeTruthy();
  }));

  it('should have getPreviousOrders function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.getPreviousOrders).toBeTruthy();
  }));

  it('should have getDetails function', inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    expect(service.getDetails).toBeTruthy();
  }));

 it('check getUserDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: details
          }
        )));
    });  
  service. getUserDetails('7418832509').subscribe(results=>{
     expect(results).toEqual(details);
    });
})));

 it('negative check getUserDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: negativeDetails
          }
        )));
    });  
  service. getUserDetails('8098433601').subscribe(results=>{
   expect(results).not.toEqual(details);
  });
})));

 it('check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
 
  mockBackend.connections.subscribe(connection => {
    expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
      body:true
        })));
  });
  service. updatePassword(userDetails).subscribe(status=>{
   expect(status).toEqual(true);
  });
})));

 it('negative check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(connection => {
  expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
    body:false
        })));
  });
  service. updatePassword(userDetails).subscribe(status=>{
   expect(status).not.toEqual(true);
  });
})));

 it('check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(connection => {
   expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
     body:true
        })));
  });
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
    expect(status).toEqual(true);
  });
})));

 it('negative check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(connection => {
  expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
     body:false
        })));
  });
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  expect(status).not.toEqual(true);
  });
})));

 it('check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: currentOrders
          }
        )));
    });
  service. getCurrentOrders("kkdcust3001").subscribe(results=>{
  expect(results).toEqual(currentOrders);
  });
})));

 it('negative check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body:currentOrdersNegative
          }
        )));
    });
  service. getCurrentOrders("kkdcust3002").subscribe(results=>{
  expect(results).not.toEqual(currentOrders);
  });
})));

 it('check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body:previousOrders
          }
        )));
    });  
  service. getPreviousOrders("kkdcust3001").subscribe(results=>{
   expect(results).toEqual(previousOrders);
  });
})));

 it('negative check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: previousOrdersNegative
}
)));
});  
  service. getPreviousOrders("kkdcust3002").subscribe(results=>{
  expect(results).not.toEqual(previousOrders);
  });
})));

 it('check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body:customerDetails
          }
        )));
    });  
  service. getDetails("KKDCUST2000").subscribe(results=>{
   expect(results).toEqual(customerDetails);
  });
})));

it('negative check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body:customerDetailsNegative
          }
        )));
    });  
  service. getDetails("KKDCUST2001").subscribe(results=>{
   expect(results).not.toEqual(customerDetails);
  });
})));
})