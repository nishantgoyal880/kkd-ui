import { Component, OnInit} from '@angular/core';
import { RegistrationLoginService } from '../../../customer/registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
	selector: 'app-customer-register',
	templateUrl: './customer-register.component.html',
	styleUrls: ['./customer-register.component.css'],
	providers:[ RegistrationLoginService ]
})
export class CustomerRegisterComponent implements OnInit {
	//declaring a form group
	rForm: FormGroup;
	//variable to store form data
	post:any;
	//variable to hide and display the elements
	hideVar:boolean=false;
	//variable to store 
	customerToRegister:any;
	//declaring an otp form group
	otpForm: FormGroup;
	//variable to store mobile number
	mobileNo:String;
	constructor(private registrationService: RegistrationLoginService,
		private fb: FormBuilder,
		public router: Router,
		private idRoleService: IdRoleService) {
		//making a form group with fileds firstname, mobileno, password, confirmpassword
		this.rForm = fb.group({
			'firstName':[null, Validators.compose([Validators.required, Validators.minLength(3)])],
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])],
			'confirmPassword' : ['',[Validators.required]],
		},{validator: this.checkIfMatchingPasswords});
		//making a form group with fileds otp
		this.otpForm = fb.group({
			'otp' : [null, Validators.required],
		});
	}

	ngOnInit() {
	}
	//function to check password and confirm password 
	checkIfMatchingPasswords(group: FormGroup) {
		let passwordField= group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if(passwordField.value !== confirmPasswordField.value ) {
			return confirmPasswordField.setErrors({notEquivalent: true})
		}else {
			return confirmPasswordField.setErrors(null);
		}
	}
	//function to send otp
	sendOtp(post) {
		this.customerToRegister={
			'mobileNo':post.mobileNo,
			'password':post.password,
			'firstName':post.firstName,
			'lastName':post.lastName
		}
		this.mobileNo=post.mobileNo;
		this.hideVar=true;
		//call otp service to generate a otp corresponding to number
		this.registrationService.generateOtp(post.mobileNo).subscribe((res) =>{
			//sucessfully sended
		}, (err) =>{
			console.log(err);
		})
	}

	//function to verify the otp
	verifyOtp(post) {
		//creating json data to be send to the verify otp sevice
		var otpData={
			'mobileNo':this.mobileNo,
			'otp':post.otp
		}
		this.registrationService.verifyOtp(otpData).subscribe((res) =>{
			//response will be true or false if true redirect to customer dashboard else invalid otp
			if(res==true){
				//save customer details to db
				this.registrationService.addCustomer(this.customerToRegister).subscribe((res) =>{
					localStorage.setItem("token",res.results.token);
					this.idRoleService.id.emit(res.results.kkdCustId);
					this.idRoleService.role.emit(res.results.role);
					this.idRoleService.isLoggedIn.emit(true);
					this.router.navigate(['productList']);
				}, (err) =>{
					//if customer is already registered
					swal({
						type: 'error',
						title: 'Oops...',
						text: 'Already Registered!',
						footer: '<b>So Directly Login......</b>',
					})
				})
			}
			else{
				swal({
					//if otp is wrong
					type: 'error',
					title: 'Oops...',
					text: 'Wrong OTP!',
					footer: '<b>Enter The Right OTP........</b>',
				})
			}
		}, (err) =>{
			swal({
				//if server is down
				type: 'error',
				title: 'Oops...',
				text: 'Server Down!',
				footer: '<b>Please Try Later......</b>',
			})
		})}
	}
