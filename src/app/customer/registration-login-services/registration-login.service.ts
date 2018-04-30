import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginRegistration } from '../config/LoginRegistration.config';


@Injectable()
export class RegistrationLoginService {

	constructor(private http : Http) { }

	addCustomer(customerToRegister) {
		return this.http.post(LoginRegistration.registration_api, customerToRegister, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	loginCustomer(customerCredentials) {
		return this.http.post(LoginRegistration.login_api, customerCredentials, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	forgetPassword(customerCredentials) {
		return this.http.put(LoginRegistration.forgetpassword_api,customerCredentials, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	generateOtp(mobileNo) {
		return this.http.get(LoginRegistration.otp_generate+mobileNo,this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	verifyOtp(otpData) {
		return this.http.post(LoginRegistration.otp_verify,otpData, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}
	private authorization() {
    let token=localStorage.getItem("token");
    if (token) {
      let headers =new Headers();
      headers.append('Authorization', token);
      return new RequestOptions({ headers: headers });
    }

  }

	private handleError(error: Response){
		return Observable.throw(error.statusText);
	}
}
