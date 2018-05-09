import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { VerifyToken } from '../../config/tokenverify.config';

@Injectable()
export class VerifytokenService {

  constructor(private http : Http) { }

  verifyToken(token) {
    return this.http.get(VerifyToken.verifytoken_api+token,this.authorization())
      .map(data => data.json(),
        error => this.handleError(error)
      )
  }
private authorization() {
    let token=localStorage.getItem("token");
    if (token) {
      let headers =new Headers();
      headers.append('Authorization', token);
      return new RequestOptions({ headers: headers });
    }

  }
  private handleError(error) {
    console.log("Logging the error occured in the service");
  }

}
