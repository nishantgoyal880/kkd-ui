import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { microServicesUrl } from '../../config/microServicesUrl.config';

@Injectable()
export class OrderService {

  constructor(private http : Http) { }

  //getting previous list of orders according to farmer id
  getPreviousOrderListFromFarmerId(farmerId) {
    return this.http.get(microServicesUrl.orderPreviousStatus+farmerId,this.authorization())
     .map(data => data.json(),
   (error: any)=>this.handleError(error));
   }

  //getting current list of orders according to farmer id
  getCurrentOrderListFromFarmerId(farmerId) {
     return this.http.get(microServicesUrl.orderCurrentStatus+farmerId,this.authorization())
      .map(data => data.json(),
    (error: any)=>this.handleError(error));
  }

  //Updating values of order details for delivery
  updateDeliveryDetails(updateValues) {
      return this.http.put(microServicesUrl.orderUpdate,updateValues,this.authorization())
       .map(data => data.json(),
     (error: any)=>this.handleError(error));
  }

  //Updating values of order details for decline reason
  updateDeclineReason(updatedReason) {
       return this.http.put(microServicesUrl.orderUpdate,updatedReason,this.authorization())
        .map(data => data.json(),
    (error: any)=>this.handleError(error));
  }

  //Error handler
  private handleError(error: Response){
     return Observable.throw(error.statusText);
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
}
