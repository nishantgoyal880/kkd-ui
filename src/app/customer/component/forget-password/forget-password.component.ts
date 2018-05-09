import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
	selector: 'app-forget-password',
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.css'],
	providers: [RegistrationLoginService]
})
export class ForgetPasswordComponent implements OnInit {
	//declaring a form group for new password
	newPasswordForm: FormGroup;
	//declaring a form group for number Form
	numberForm: FormGroup;
	//declaring a form group for otp Form
	otpForm: FormGroup;
	//variable yo store the form data
	post: any;
	//variable to store the mobile number
	mobileNo: String;
	//variable to hide and display the elements
	hideVar: boolean = false;
	hideVar2: boolean = false;
	hideVar3: boolean = false;

	constructor(private registrationService: RegistrationLoginService,
		private fb: FormBuilder,
		public router: Router,
		private idRoleService: IdRoleService) {
		//making a form group with fileds password, confirmpassword
		this.newPasswordForm = fb.group({
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])],
			'confirmPassword': ['', [Validators.required]],
		}, { validator: this.checkIfMatchingPasswords });
		//making a form group with fileds mobile number
		this.numberForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		});
		//making a form group with fileds otp
		this.otpForm = fb.group({
			'otp': [null, Validators.required],
		});
	}

	ngOnInit() {
	}
	//function to check password and confirm password
	checkIfMatchingPasswords(group: FormGroup) {
		let passwordField = group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if (passwordField.value !== confirmPasswordField.value) {
			return confirmPasswordField.setErrors({ notEquivalent: true })
		} else {
			return confirmPasswordField.setErrors(null);
		}
	}
	//function to send otp
	sendOtp(post) {
		this.mobileNo = post.mobileNo;
		this.hideVar = true;
		this.hideVar2 = true;
		//call otp service to generate a otp corresponding to number
		this.registrationService.generateOtp(post.mobileNo).subscribe((res) => {
			//sucessfully sended
		}, (err) => {
			console.log(err);
		})
	}
	verifyOtp(post) {
		var otpData = {
			'mobileNo': this.mobileNo,
			'otp': post.otp
		}
		//call otp service to verify the otp if true then show update password card
		this.registrationService.verifyOtp(otpData).subscribe((res) => {
			//response will be true or false if true move else error
			if (res == true) {
				this.hideVar2 = false;
				this.hideVar3 = true;
			}
			else {
				//in case when otp is wrong
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Wrong OTP!',
					footer: '<b>Enter Correct OTP......</b>',
				})
			}
		}, (err) => {
			//if otp is invalid
			if (err.status = 401) {
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Invalid OTP!',
					footer: '<b>OTP Not Matched......</b>',
				})
			}
			else {
				//if server is down
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Server Down!',
					footer: '<b>Please Try Later.......</b>',
				})
			}
		})
	}
	//function to reset the password of customer
	resetPasswordCustomer(post) {
		//creating json to be send to registration service to reset the credentials
		var customerNewCredentials = {
			'mobileNo': this.mobileNo,
			'password': post.password,
		}

		this.registrationService.forgetPassword(customerNewCredentials).subscribe((res) => {
			//in case of response
			swal({
				position: 'top-end',
				type: 'success',
				title: '<b>Password Changes successfully......</b>',
				showConfirmButton: false,
				timer: 1000
			})
			//storing the token in the locql storage
			localStorage.setItem("token", res.results.token);
			localStorage.setItem("id",res.results.kkdCustId);
			//passing id and role to the service and emmiting a log in event which will be used in the header
			this.idRoleService.id.emit(res.results.kkdCustId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);
			this.router.navigate(['productList']);
		}, (err) => {
			//in case of error
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Conflict!',
				footer: '<b>Error In Changing password......</b>',
			})
		})
	}
}
