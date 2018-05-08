import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AddBankDetails } from '../config/bankDetails.config';

@Injectable()
export class BankDetailsService {

	constructor(private http : Http) { }
	private headers = new Headers({ 'Content-Type': 'application/json'});

	saveAccountDetails(bankDetails){
		return this.http.put(AddBankDetails.addBankDetails_api+"KKDFARM1000/accounts", bankDetails , this.authorization())
		.map(data => data.json(),
      //(error: any)=>this.handleError(error));
      (err)=> console.log(err));
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
