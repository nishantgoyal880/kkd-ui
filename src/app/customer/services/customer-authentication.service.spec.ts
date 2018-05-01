import { TestBed, inject } from '@angular/core/testing';
import { async, ComponentFixture } from '@angular/core/testing';
import { CustomerAuthenticationService } from './customer-authentication.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {Customer} from '../component/customer-my-account/customer'
import { Observable } from 'rxjs/Observable';


describe('CustomerAuthenticationService', () => {
  let details :any;
  let userDetails :any;
  let userDetailsDelete :any;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAuthenticationService],
      imports : [HttpClientModule,HttpModule],
      
    });
     userDetails ={
      "currentPassword": "Sapient@1234",
      "newPassword": "Sriz3196@",
      "userId": "KKDCUST2000"
    };
    details = {
      "kkdCustId": "KKDCUST2000",
      "mobileNo": "9468075105",
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
    };
   
    userDetailsDelete={
      "mobileNo": "9468075105",
      "password": "Sriz3196@",
    };
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

  it('check getDetails function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
    service. getUserDetails('9468075105').subscribe(results=>{
    console.log(JSON.stringify(results));
     console.log(JSON.stringify(details));
     expect(results).toEqual(details);
    });
})));


it('check updatePassword function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. updatePassword(userDetails).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(true);
  });
})));

it('check deleteProfile function', async(inject([CustomerAuthenticationService], (service: CustomerAuthenticationService) => {
  service. deleteProfile(userDetailsDelete).subscribe(status=>{
  console.log(status);
   expect(status).toEqual(false);
  });
})));


})