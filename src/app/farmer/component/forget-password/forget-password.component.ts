import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
	selector: 'app-forget-password',
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.css'],
	providers:[ RegistrationLoginService ]
})
export class ForgetPasswordComponent implements OnInit {
	//varible for new password form group
	newPasswordForm: FormGroup;
	//variable for number form group
	numberForm: FormGroup;
	//variable for otp form group
	otpForm: FormGroup;
	//variable to store the form data
	post:any;
	//variable to store the mobile number
	mobileNo:String;
	//varible to be used with ngif to show and hide the elements
	hideVar:boolean=false;
	hideVar2:boolean=false;
	hideVar3:boolean=false;

	constructor(private registrationService: RegistrationLoginService,
		private fb: FormBuilder,
		public router: Router,
		private idRoleService: IdRoleService) {
		//form group with fields password and confirm password
		this.newPasswordForm = fb.group({
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
			'confirmPassword' : ['',[Validators.required]],
		},{validator: this.checkIfMatchingPasswords});
		//form group with field mobile number
		this.numberForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		});
		//form group with field otp number
		this.otpForm = fb.group({
			'otp' : [null, Validators.required],
		});
	}

	ngOnInit() {
	}

	//function to check whether the new password and confirm is same
	checkIfMatchingPasswords(group: FormGroup) {
		let passwordField= group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if(passwordField.value !== confirmPasswordField.value ) {
			return confirmPasswordField.setErrors({notEquivalent: true})
		}else {
			return confirmPasswordField.setErrors(null);
		}
	}

	//funtion to send otp to the number
	sendOtp(post) {
		//get the mobile number from the form and send otp on this number
		this.mobileNo=post.mobileNo;
		//hide the enter number element and show enter otp element
		this.hideVar=true;
		this.hideVar2=true;
		//call otp service to generate a otp corresponding to number
		this.registrationService.generateOtp(this.mobileNo).subscribe((res) =>{
			//sucessfully sended
		}, (err) =>{
			//in case of error
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'OTP service not ready',
				footer: '.....',
			})
		})

	}

	//function to verify the otp
	verifyOtp(post) {
		//json data to be send to verify otp service
		var otpData={
			'mobileNo':this.mobileNo,
			'otp':post.otp
		}
		//call otp service to verify the otp if true then show update password card
		this.registrationService.verifyOtp(otpData).subscribe((res) =>{
		//response will be true or false if true move else error
		if(res==true){
			//show element to enter new password and hide verify otp element
			this.hideVar2=false;
			this.hideVar3=true;
		}
		else{
			//if otp entered is wrong
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Wrong OTP!',
				footer: 'Enter Correct OTP......',
			})
		}
	}, (err) =>{
		//in case of error
		swal({
			type: 'error',
			title: 'Oops...',
			text: 'Server Down!',
			footer: 'Please Try Later.......',
		})

	})
	}

	//function to reset password of farmer
	resetPasswordFarmer(post) {
		//creating json data of new credentials
		var farmerNewCredentials={
			'mobileNo':this.mobileNo,
			'password':post.password
		}
		//calling the service to change the credentials
		this.registrationService.forgetPassword(farmerNewCredentials).subscribe((res) =>{
			swal({
				position: 'top-end',
				type: 'success',
				title: 'Password Changes successfully......',
				showConfirmButton: false,
				timer: 1000
			})
			//storing the token in the locql storage
			localStorage.setItem("token",res.results.token);
			//passing id and role to the service and emmiting a log in event which will be used in the header
			this.idRoleService.id.emit(res.results.kkdFarmId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);
			//routing to farmer dashboard
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			//in case of error
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Conflict!',
				footer: 'Error In Changing password......',
			})
		})
	}

}
