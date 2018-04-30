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

  public getAllProducts() {
    const options = new RequestOptions({headers: this.header});
    return this.http.get(viewProductServiceUrl.viewProductUrl,options)
    .map(data => data.json(),
      error => this.handleError(error)
    )
  }

  public deleteParticularProduct(id : any) {
    //alert(url);
      return this.http.delete(viewProductServiceUrl.Url+id)
      .map(data => data.status,
        error => this.handleError(error)
      )
  }

  public update(productSubmission){
    const options = new RequestOptions({headers: this.header});
    return this.http.put(viewProductServiceUrl.Url,productSubmission,options)
     .map(data => data.json(),
    (error: any)=>this.handleError(error)); 
   }

  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
