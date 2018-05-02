 import { Injectable } from '@angular/core';
 import { Http, Response, RequestOptions, Headers } from '@angular/http';
 import { Observable } from 'rxjs/Observable';
 import 'rxjs/add/operator/map';
 import { App } from '../config/app.config';
 import { UserDetails } from '../config/user-details.config';

@Injectable()
export class CustomerHeaderService {

  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

   // Function to get customer name and make service call to get customer name from App
   searchCustomer(searchedCustomer) {
     return this.http.get(App.mapping+searchedCustomer)
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }
    updateCustomerAddress(userId,address){
      return this.http.put(UserDetails.updateAddress+userId+"/update/address",address,{headers: this.headers})
      .map(data => 
        data.json(),
      (error: any)=>this.handleError(error));
    }
  }
