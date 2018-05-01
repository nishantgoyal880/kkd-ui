import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import{UserDetails} from '../config/user-details.config';

@Injectable()
export class CustomerAuthenticationService {
  public static cus :string;
  constructor(private http : Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  changeCustomerId(customerId : string){
    CustomerAuthenticationService.cus = customerId;
  }

//code to send token in the header
  private authorization() {
  let token=localStorage.getItem("token");
  if (token) {
    let headers =new Headers();
    headers.append('Authorization', token);
    return new RequestOptions({ headers: headers });
  }
}

   handleError(error: Response){
   alert("mobile number not registered");
   return Observable.throw(error.statusText);
   }

     getUserDetails(mobileNumber : String){
    return this.http.get(UserDetails.url + mobileNumber,this.authorization())
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
  }

     updatePassword(updatedInfo){
    return this.http.put(UserDetails.updatePasswordUrl,updatedInfo, this.authorization())
    .map(data => data.json(),
    (error: any)=>this.handleError(error));
    }

      deleteProfile(userInfo){
      return this.http.put(UserDetails.deleteProfileUrl,userInfo,this.authorization())
      .map(data=>data.json(),
       error=>this.handleError(error));
     }

      getCurrentOrders(customerId : String){
       return this.http.get(UserDetails.currentOrdersUrl+customerId,this.authorization())
       .map(data=>data.json(),
       error=>this.handleError(error));
       }

      getPreviousOrders(customerId : String){
        return this.http.get(UserDetails.previousOrdersUrl+customerId,this.authorization())
        .map(data=>data.json(),
        error=>this.handleError(error));
        }

      getDetails(customerId){
      return this.http.get(UserDetails.customerAddressBookUrl+customerId,this.authorization())
      .map(res => res.json());
 }
  }


