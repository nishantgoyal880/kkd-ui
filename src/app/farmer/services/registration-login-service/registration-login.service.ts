import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RegistrationLogin } from '../../config/RegistrationLogin.config';

@Injectable()
export class RegistrationLoginService {

	constructor(private http : Http) { }

	addFarmer(farmerToRegister) {
		return this.http.post(RegistrationLogin.registration_api, farmerToRegister, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	loginFarmer(farmerCredentials) {
		return this.http.post(RegistrationLogin.login_api, farmerCredentials,this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));

	}

	forgetPassword(farmerNewCredentials) {
		return this.http.put(RegistrationLogin.forgetpassword_api,farmerNewCredentials, this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	addhaarDataVerify(aadhaarNo) {
		return this.http.get(RegistrationLogin.aadhaar+aadhaarNo,this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	generateOtp(mobileNo) {
		return this.http.get(RegistrationLogin.otp_generate+mobileNo,this.authorization())
		.map(data => data.json(),
			(error: any)=>this.handleError(error));
	}

	verifyOtp(otpData) {
		return this.http.post(RegistrationLogin.otp_verify,otpData, this.authorization())
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
