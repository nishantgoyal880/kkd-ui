import { TestBed, inject,getTestBed, } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { CustomerAuthenticationService } from './customer-authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Customer} from '../component/customer-my-account/customer';
import { Observable } from 'rxjs/Observable';
import {DETAILS,USERDETAILS,USERDETAILSDELETE,CURRENTORDERS,PREVIOUSORDERS,CUSTOMERDETAILS} from '../component/customer-my-account/mock-data';
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
            body: 
             details
          }
        )));
    });  
  service. getUserDetails('7418832509').subscribe(results=>{
    console.log(JSON.stringify(results));
    console.log(JSON.stringify(details));
     expect(results).toEqual(details);
    });
})));

 it('negative check getUserDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
              {
                "kkdCustId": "KKDCUST2001",
                "mobileNo": "8098433601",
                "password": null,
                "firstName": "Murali",
                "lastName": "string",
                "addresses": [
                  {
                    "pincode": 0,
                    "addressLine": "string",
                    "city": "string",
                    "district": "string",
                    "state": "string",
                    "primary": false
                  }
                ],
                "primaryAddress": {
                  "pincode": 0,
                  "addressLine": "string",
                  "city": "string",
                  "district": "string",
                  "state": "string",
                  "primary": false
                },
                "role": "Customer",
                "bankDetails": null
              }
          }
        )));
    });  
  service. getUserDetails('8098433601').subscribe(results=>{
  console.log(JSON.stringify(results));
   //console.log(JSON.stringify(details));
   expect(results).not.toEqual(details);
  });
})));

 it('check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
 
  mockBackend.connections.subscribe(connection => {
    // is it the correct REST type for an update? (PUT)
    expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
      //status: 204,
      body:true
        })));
  });
  service. updatePassword(userDetails).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(true);
   //expect(status.status).toBe(204);
  });
})));

 it('negative check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(connection => {
    // is it the correct REST type for an update? (PUT)
    expect(connection.request.method).toBe(RequestMethod.Put);
    connection.mockRespond(new Response(new ResponseOptions({
      //status: 204,
      body:false
        })));
  });
  service. updatePassword(userDetails).subscribe(status=>{
  console.log(status);
   expect(status).not.toEqual(true);
  });
})));

 it('check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(connection => {
    // is it the correct REST type for an update? (PUT)
    expect(connection.request.method).toBe(RequestMethod.Delete);
    connection.mockRespond(new Response(new ResponseOptions({
      //status: 204,
      body:true
        })));
  });
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(true);
  });
})));

 it('negative check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(connection => {
    // is it the correct REST type for an update? (PUT)
    expect(connection.request.method).toBe(RequestMethod.Delete);
    connection.mockRespond(new Response(new ResponseOptions({
      //status: 204,
      body:false
        })));
  });
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  console.log(status);
   expect(status).not.toEqual(true);
  });
})));

 it('check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
            [
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4013",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "12:05:00",
                "expectedDate": "2018-05-28",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "9411",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4014",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "3294",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4015",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "0524",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4016",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "7357",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4017",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "5533",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              }
            ]
          }
        )));
    });
  service. getCurrentOrders("kkdcust3001").subscribe(results=>{
  console.log(results);
   expect(results).toEqual(currentOrders);
  });
})));

 it('negative check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
            [
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3002",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4013",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "12:05:00",
                "expectedDate": "2018-05-28",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "9411",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3002",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4014",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "3294",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3002",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4015",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "0524",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3002",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4016",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "7357",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3002",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4017",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": null,
                "expectedDate": "2018-04-27",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Current",
                "orderStatus": null,
                "otp": "5533",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              }
            ]
          }
        )));
    });
  service. getCurrentOrders("kkdcust3002").subscribe(results=>{
  console.log(results);
   expect(results).not.toEqual(currentOrders);
  });
})));

 it('check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
            [
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4002",
                "quantity": 10,
                "farmerStatus": "Decline",
                "expectedTime": "15:45:00",
                "expectedDate": "2018-04-22",
                "mobileNo": "9813887587",
                "transactionId": "kkdtrans5001",
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Cancelled",
                "otp": "5678",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": "I am not in a good health condition"
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4003",
                "quantity": 10,
                "farmerStatus": "Decline",
                "expectedTime": "15:45:00",
                "expectedDate": "2018-04-28",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Cancelled",
                "otp": "5678",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": "The order quantity is not sufficient"
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4005",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "15:45:00",
                "expectedDate": "2018-04-28",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Delivered",
                "otp": "5678",
                "otpVerified": true,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4006",
                "quantity": 10,
                "farmerStatus": "Decline",
                "expectedTime": null,
                "expectedDate": null,
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Cancelled",
                "otp": "4823",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": "Other reasons"
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4007",
                "quantity": 10,
                "farmerStatus": "Decline",
                "expectedTime": null,
                "expectedDate": null,
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Cancelled",
                "otp": "2995",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": "The order quantity is not sufficient"
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4008",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "05:45:00",
                "expectedDate": "2018-04-22",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Delivered",
                "otp": "0021",
                "otpVerified": true,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4009",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "15:35:00",
                "expectedDate": "2018-05-24",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Delivered",
                "otp": "1795",
                "otpVerified": true,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4010",
                "quantity": 10,
                "farmerStatus": "Decline",
                "expectedTime": null,
                "expectedDate": null,
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Cancelled",
                "otp": "6820",
                "otpVerified": null,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": "I am not in a good health condition"
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4011",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "02:00:00",
                "expectedDate": "2018-05-01",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Delivered",
                "otp": "9198",
                "otpVerified": true,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              },
              {
                "kkdFarmId": "kkdfarm1001",
                "productId": "kkdprod2001",
                "kkdCustId": "kkdcust3001",
                "name": "nishant",
                "address": {
                  "pincode": 127306,
                  "addressLine": "306 street A",
                  "city": "dundahera",
                  "district": "gurugram",
                  "state": "haryana"
                },
                "avgRating": 5,
                "orderId": "KKDORD4012",
                "quantity": 10,
                "farmerStatus": "Accept",
                "expectedTime": "01:00:00",
                "expectedDate": "2018-05-02",
                "mobileNo": "9813887587",
                "transactionId": null,
                "totalAmount": 500,
                "orderType": "Previous",
                "orderStatus": "Delivered",
                "otp": "7886",
                "otpVerified": true,
                "orderPlacingDate": "2018-04-05",
                "orderReceivingDate": null,
                "validityOfOrder": null,
                "orderDeclineReason": null
              }
            ]
          }
        )));
    });  
  service. getPreviousOrders("kkdcust3001").subscribe(results=>{
  console.log(results);
   expect(results).toEqual(previousOrders);
  });
})));

 it('negative check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
  [
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4002",
      "quantity": 10,
      "farmerStatus": "Decline",
      "expectedTime": "15:45:00",
      "expectedDate": "2018-04-22",
      "mobileNo": "9813887587",
      "transactionId": "kkdtrans5001",
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Cancelled",
      "otp": "5678",
      "otpVerified": null,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": "I am not in a good health condition"
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4003",
      "quantity": 10,
      "farmerStatus": "Decline",
      "expectedTime": "15:45:00",
      "expectedDate": "2018-04-28",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Cancelled",
      "otp": "5678",
      "otpVerified": null,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": "The order quantity is not sufficient"
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4005",
      "quantity": 10,
      "farmerStatus": "Accept",
      "expectedTime": "15:45:00",
      "expectedDate": "2018-04-28",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Delivered",
      "otp": "5678",
      "otpVerified": true,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": null
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4006",
      "quantity": 10,
      "farmerStatus": "Decline",
      "expectedTime": null,
      "expectedDate": null,
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Cancelled",
      "otp": "4823",
      "otpVerified": null,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": "Other reasons"
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4007",
      "quantity": 10,
      "farmerStatus": "Decline",
      "expectedTime": null,
      "expectedDate": null,
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Cancelled",
      "otp": "2995",
      "otpVerified": null,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": "The order quantity is not sufficient"
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4008",
      "quantity": 10,
      "farmerStatus": "Accept",
      "expectedTime": "05:45:00",
      "expectedDate": "2018-04-22",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Delivered",
      "otp": "0021",
      "otpVerified": true,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": null
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4009",
      "quantity": 10,
      "farmerStatus": "Accept",
      "expectedTime": "15:35:00",
      "expectedDate": "2018-05-24",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Delivered",
      "otp": "1795",
      "otpVerified": true,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": null
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4010",
      "quantity": 10,
      "farmerStatus": "Decline",
      "expectedTime": null,
      "expectedDate": null,
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Cancelled",
      "otp": "6820",
      "otpVerified": null,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": "I am not in a good health condition"
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4011",
      "quantity": 10,
      "farmerStatus": "Accept",
      "expectedTime": "02:00:00",
      "expectedDate": "2018-05-01",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Delivered",
      "otp": "9198",
      "otpVerified": true,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": null
    },
    {
      "kkdFarmId": "kkdfarm1001",
      "productId": "kkdprod2001",
      "kkdCustId": "kkdcust3002",
      "name": "nishant",
      "address": {
        "pincode": 127306,
        "addressLine": "306 street A",
        "city": "dundahera",
        "district": "gurugram",
        "state": "haryana"
      },
      "avgRating": 5,
      "orderId": "KKDORD4012",
      "quantity": 10,
      "farmerStatus": "Accept",
      "expectedTime": "01:00:00",
      "expectedDate": "2018-05-02",
      "mobileNo": "9813887587",
      "transactionId": null,
      "totalAmount": 500,
      "orderType": "Previous",
      "orderStatus": "Delivered",
      "otp": "7886",
      "otpVerified": true,
      "orderPlacingDate": "2018-04-05",
      "orderReceivingDate": null,
      "validityOfOrder": null,
      "orderDeclineReason": null
    }
  ]
}
)));
});  
  service. getPreviousOrders("kkdcust3002").subscribe(results=>{
  console.log(results);
   expect(results).not.toEqual(previousOrders);
  });
})));

 it('check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
            {
              "kkdCustId": "KKDCUST2000",
              "mobileNo": "7418832509",
              "password": null,
              "firstName": "string",
              "lastName": "string",
              "addresses": [
                {
                  "pincode": 0,
                  "addressLine": "string",
                  "city": "string",
                  "district": "string",
                  "state": "string",
                  "primary": false
                }
              ],
              "primaryAddress": {
                "pincode": 0,
                "addressLine": "string",
                "city": "string",
                "district": "string",
                "state": "string",
                "primary": false
              },
              "role": "Customer",
              "bankDetails": null
            }
          }
        )));
    });  
  service. getDetails("KKDCUST2000").subscribe(results=>{
  console.log("----------------------")
    console.log(results);
   expect(results).toEqual(customerDetails);
  });
})));

it('negative check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  
  mockBackend.connections.subscribe(
    (connection: MockConnection) => {
      connection.mockRespond(new Response(
        new ResponseOptions({
            body: 
            {
              "kkdCustId": "KKDCUST2001",
              "mobileNo": "8098433601",
              "password": null,
              "firstName": "Murali",
              "lastName": "string",
              "addresses": [
                {
                  "pincode": 0,
                  "addressLine": "string",
                  "city": "string",
                  "district": "string",
                  "state": "string",
                  "primary": false
                }
              ],
              "primaryAddress": {
                "pincode": 0,
                "addressLine": "string",
                "city": "string",
                "district": "string",
                "state": "string",
                "primary": false
              },
              "role": "Customer",
              "bankDetails": null
            }
          }
        )));
    });  
  service. getDetails("KKDCUST2001").subscribe(results=>{
  console.log("----------------------")
    console.log(results);
   expect(results).not.toEqual(customerDetails);
  });
})));
})