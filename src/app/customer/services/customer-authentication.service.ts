import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{UserDetails} from '../config/user-details.config';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class CustomerAuthenticationService {

  
  
  public static cus :string;
  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});


  changeCustomerId(customerId : string){
    
    
    CustomerAuthenticationService.cus = customerId;

  }


  getUserDetails(mobileNumber : String){
  return this.http.get(UserDetails.url + mobileNumber)
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

  
  
  
   private handleError(error: Response){
    alert("mobile number not registered");
     return Observable.throw(error.statusText);
     
   }

  updatePassword(updatedInfo){
    return this.http.put(UserDetails.updatePasswordUrl,updatedInfo, {headers: this.headers})
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

    deleteProfile(userInfo){
      
      return this.http.put(UserDetails.deleteProfileUrl,userInfo,{headers: this.headers})
      .map(data=>data.json(),
       error=>this.handleError(error));
     
  }

      getCurrentOrders(customerId : String){
       return this.http.get(UserDetails.currentOrdersUrl+customerId)
       .map(data=>data.json(),
       error=>this.handleError(error));
       }

       getPreviousOrders(customerId : String){
        return this.http.get(UserDetails.previousOrdersUrl+customerId)
        .map(data=>data.json(),
        error=>this.handleError(error));
        }

      getDetails(customerId){
      return this.http.get(UserDetails.customerAddressBookUrl+customerId)
      .map(res => res.json());
 }
  }


