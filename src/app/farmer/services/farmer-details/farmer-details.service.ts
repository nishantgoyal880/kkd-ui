import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { App } from '../../config/app.config';

@Injectable()
export class FarmerDetailsService {

  constructor(private http : Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  //code to send token in the header
private authorization() {
  let token=localStorage.getItem("token");
  if (token) {
    let headers =new Headers();
    headers.append('Authorization', token);
    return new RequestOptions({ headers: headers });
  }
}
   // Function to get farmer's details
   getFarmerName(gotFarmerName) {
    return this.http.get(App.nameMapping+gotFarmerName,this.authorization())
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }
   // Function to update farmer's address 
   updateFarmerAddress(mobileNo,updatedInfo){
    return this.http.put(App.alternateAddressMapping+mobileNo,updatedInfo,this.authorization())
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }
   // Function to update farmer's mobile number
    updateFarmerMobile(searchedFarmer,updatedInfo){
      return this.http.put(App.alternateMobileMapping+searchedFarmer,updatedInfo,this.authorization())
      .map(data => 
        data.json(),
      (error: any)=>this.handleError(error));
    }
     // Function to delete farmer's profile
     deleteFarmerProfile(userDetails){
      return this.http.put(App.deleteProfileMapping,userDetails,this.authorization())
      .map(data => data.json(),
      (error: any)=>this.handleError(error));
    }
   
    // Function to change farmer's password
    updatePassword(passwordResetInfo){
      return this.http.put(App.changePasswordMapping,passwordResetInfo,this.authorization()).
      map( data=> data.json(),
      (error:any)=> this.handleError(error));
    }

    // Function to handle errors
    private handleError(error: Response){
      return Observable.throw(error.statusText);
    }
}
