import { TestBed, inject } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { CustomerAuthenticationService } from './customer-authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Customer} from '../component/customer-my-account/customer';
import { Observable } from 'rxjs/Observable';
import {DETAILS,USERDETAILS,USERDETAILSDELETE,CURRENTORDERS,PREVIOUSORDERS,CUSTOMERDETAILS} from '../component/customer-my-account/mock-data';

describe('CustomerAuthenticationService', () => {
  let details :any;
  let userDetails :any;
  let userDetailsDelete :any;
  let currentOrders : any;
  let previousOrders:any;
  let customerDetails :any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthenticationService],
      imports : [HttpClientModule,HttpModule],
    });
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
    service. getUserDetails('9468075105').subscribe(results=>{
    console.log(JSON.stringify(results));
     console.log(JSON.stringify(details));
     expect(results).toEqual(details);
    });
})));

 it('negative check getUserDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getUserDetails('9468075104').subscribe(results=>{
  console.log(JSON.stringify(results));
   console.log(JSON.stringify(details));
   expect(results).not.toEqual(details);
  });
})));

 it('check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. updatePassword(userDetails).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(true);
  });
})));

 it('negative check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. updatePassword(userDetails).subscribe(status=>{
  console.log(status);
   expect(status).not.toEqual(false);
  });
})));

 it('check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(false);
  });
})));

 it('negative check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  console.log(status);
   expect(status).not.toEqual(true);
  });
})));

 it('check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getCurrentOrders("kkdcust3001").subscribe(results=>{
  console.log(results);
   expect(results).toEqual(currentOrders);
  });
})));

 it('negative check getCurrentOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getCurrentOrders("kkdcust3002").subscribe(results=>{
  console.log(results);
   expect(results).not.toEqual(currentOrders);
  });
})));

 it('check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getPreviousOrders("kkdcust3001").subscribe(results=>{
  console.log(results);
   expect(results).toEqual(previousOrders);
  });
})));

 it('negative check getPreviousOrders function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getPreviousOrders("kkdcust3002").subscribe(results=>{
  console.log(results);
   expect(results).not.toEqual(previousOrders);
  });
})));

 it('check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getDetails("KKDCUST2000").subscribe(results=>{
  console.log("----------------------")
    console.log(results);
   expect(results).toEqual(customerDetails);
  });
})));

it('negative check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. getDetails("KKDCUST2001").subscribe(results=>{
  console.log("----------------------")
    console.log(results);
   expect(results).not.toEqual(customerDetails);
  });
})));
})