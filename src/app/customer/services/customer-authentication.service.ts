import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserDetails } from '../config/user-details.config';

@Injectable()
export class CustomerAuthenticationService {

  constructor(private http: Http) { }

//Method to send authorisation token in the header
  private authorization() {
    let token = localStorage.getItem("token");
    if (token) {
      let headers = new Headers();
      headers.append('Authorization', token);
      return new RequestOptions({ headers: headers });
    }
  }

  //Method to handle error 
  handleError(error: Response) {
    alert("mobile number not registered");
    return Observable.throw(error.statusText);
  }

//Method to retreive customer details using mobile number
  getUserDetails(mobileNumber: String) {
    return this.http.get(UserDetails.url + mobileNumber, this.authorization())
      .map(data => data.json(),
        (error: any) => this.handleError(error));
  }

//Method to update the password of customer
  updatePassword(updatedInfo) {
    return this.http.put(UserDetails.updatePasswordUrl, updatedInfo, this.authorization())
      .map(data => data.json(),
        (error: any) => this.handleError(error));
  }

//Method to delete the profile of the customer
  deleteProfile(userInfo) {
    return this.http.put(UserDetails.deleteProfileUrl, userInfo, this.authorization())
      .map(data => data.json(),
        error => this.handleError(error));
  }

//Method to retreive the current orders of the customer
  getCurrentOrders(customerId: String) {
    return this.http.get(UserDetails.currentOrdersUrl + customerId, this.authorization())
      .map(data => data.json(),
        error => this.handleError(error));
  }

//Method to retreive the previous orders of the customer
  getPreviousOrders(customerId: String) {
    return this.http.get(UserDetails.previousOrdersUrl + customerId, this.authorization())
      .map(data => data.json(),
        error => this.handleError(error));
  }

//Method to retreive the customer details using customer Id
  getDetails(customerId) {
    return this.http.get(UserDetails.customerAddressBookUrl + customerId, this.authorization())
      .map(res => res.json());
  }
}


