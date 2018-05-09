import { Observable } from 'rxjs/Observable';

//Model customer data structure
export class Customer {
    kkdCustId: string;
    mobileNo: string;
    password: string;
    firstName: string;
    lastName: string;
    addresses: [
      {
        pincode: any,
    addressLine: string,
    city: string,
        district: string,
        state: string,
        primary: false
      }
    ];
    primaryAddress: {
      pincode: 0,
      addressLine: string,
      city: string,
      district: string,
      state: string,
      primary: false
    };
    role: string;
    bankDetails: null;

}