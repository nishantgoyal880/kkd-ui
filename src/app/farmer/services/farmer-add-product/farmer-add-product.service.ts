import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { addProductServiceUrl } from '../../config/addProductServiceUrl.config';


@Injectable()
export class FarmerAddProductService {

  constructor(private http: Http) { }
  private headers = new Headers({ 'Content-Type': 'application/json'});

  public handleError(error: Response){
    return Observable.throw(error.statusText);
  }    

  update(id,productSubmission){
       return this.http.post(addProductServiceUrl.nameMapping+id,productSubmission,this.authorization())
        .map(data => data.json(),
       (error: any)=>this.handleError(error)); 
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
