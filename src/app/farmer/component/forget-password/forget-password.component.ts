import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
	selector: 'app-forget-password',
	templateUrl: './forget-password.component.html',
	styleUrls: ['./forget-password.component.css'],
	providers:[ RegistrationLoginService ]
})
export class ForgetPasswordComponent implements OnInit {

	newPasswordForm: FormGroup;
	numberForm: FormGroup;
	otpForm: FormGroup;
	post:any;   
	mobileNo:String;
	password:String;
	confirmPassword:String;
	hideVar:boolean=false;
	hideVar2:boolean=false;
	hideVar3:boolean=false;

	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) { 
		this.newPasswordForm = fb.group({
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
			'confirmPassword' : ['',[Validators.required]],
		},{validator: this.checkIfMatchingPasswords});

		this.numberForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
		});

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
	

	sendOtp(post) {
		this.mobileNo=post.mobileNo;
		this.hideVar=true;
		this.hideVar2=true;
		//call otp service to generate a otp corresponding to number
		this.registrationService.generateOtp(post.mobileNo).subscribe((res) =>{
			//sucessfully sended
		}, (err) =>{
			console.log(err);
		})
		
	}

	verifyOtp(post) {

		var otpData={
			'mobileNo':this.mobileNo,
			'otp':post.otp
		}
				//call otp service to verify the otp if true then show update password card
				this.registrationService.verifyOtp(otpData).subscribe((res) =>{
			//response will be true or false if true move else error
			if(res==true){
				//show card to enter new password
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
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Server Down!',
				footer: 'Please Try Later.......',
			})

		})
			}


			resetPasswordFarmer(post) {
		//getting new credentials
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
			//storing the token and farmer id
			localStorage.removeItem('token');
			localStorage.setItem("token",res.results.token);
			localStorage.setItem("kkdFarmId",res.results.kkdFarmId);
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Conflict!',
				footer: 'Error In Changing password......',
			})
		})
	}

}
