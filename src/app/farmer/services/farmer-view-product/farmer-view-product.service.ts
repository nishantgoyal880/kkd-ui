import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { viewProductServiceUrl } from '../../config/viewProductServiceUrl.config';
import { Http,Headers, Response,RequestOptions } from '@angular/http';
// import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FarmerViewProductService {
  private header;
  constructor(private http: Http) {
    this.header = new Headers();
    // this.header.append('Content-Type', 'application/json');
    this.header.append('Authorization','String');
  }
  // private headers = new Headers({ 'Content-Type': 'application/json'});

  //getting all data of particular farmer from database service
  public getAllProducts(id:any) {
    console.log("in product service:"+id);
    return this.http.get(viewProductServiceUrl.viewProductUrl+id+"/product",this.authorization())
    .map(data => data.json(),
      error => this.handleError(error)
    )
  }

  //deleting a particular product from database service
  public deleteParticularProduct(id : any) {
      return this.http.delete(viewProductServiceUrl.Url+id,this.authorization())
      .map(data => data.status,
        error => this.handleError(error)
      )
  }

  //updating a particular product from database service
  public update(productSubmission){
    return this.http.put(viewProductServiceUrl.Url,productSubmission,this.authorization())
     .map(data => data.json(),
    (error: any)=>this.handleError(error)); 
   }

   //handling errors
  private handleError(error) {
    console.log("Logging the error occured in the service");
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
