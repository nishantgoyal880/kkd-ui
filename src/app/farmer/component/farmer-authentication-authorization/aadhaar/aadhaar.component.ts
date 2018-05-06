import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RegistrationLoginService } from '../../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';


@Component({
	selector: 'app-aadhaar',
	templateUrl: './aadhaar.component.html',
	styleUrls: ['./aadhaar.component.css'],
	providers: [RegistrationLoginService]
})
export class AadhaarComponent implements OnInit {
	//emitting a event with aadhaar data
	@Output() success = new EventEmitter<any>();
	//making a form group for aadhaar data
	rForm: FormGroup;
	//making a form froup for otp data
	otpForm: FormGroup;
	//variable to store the form data
	post: any;
	//variable to store the aadhaar data
	aadhaarData: any;
	//varible to be used with ngif to show and hide the elements
	hideVar: boolean = false;
	//variable to store the mobile number
	mobileNo: string;
	constructor(private registrationService: RegistrationLoginService,
		public router: Router,
		private fb: FormBuilder) {
		//creating a form group with filed as aadhaar Number
		this.rForm = fb.group({
			'aadhaarNo': [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])]

		});
		//creating a form group with filed as otp number
		this.otpForm = fb.group({
			'otp': [null, Validators.required],
		});
	}

	ngOnInit() {
	}

	//function to send the otp
	sendOtp(post) {
		//call aadhaar service to check whether that aadhaar number exists or not if exists return the aadhaar data, else sya aadhaar not exists
		this.registrationService.addhaarDataVerify(post.aadhaarNo).subscribe((res) => {
				//save the aadhaar data
				this.aadhaarData = res;
				//get the mobile number from the aadhaar data
				this.mobileNo=res.mobileNo;
			//go to otp page and hide the aadhaar page
			this.hideVar = true;
		}, (err) => {
			//if aadhaar number does not exists
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Aadhaar Number Not Found!',
				footer: 'Enter Valid Aadhaar Number......',
			})
		})
	}

	//function to verify the otp
	verifyOtp(post) {
		//make json data to be send to verify otp service
		var otpData = {
			'mobileNo': this.mobileNo,
			'otp': post.otp
		}
		//call otp service to verify the otp if true then emit a event and send aadhaar data in the event
		this.registrationService.verifyOtp(otpData).subscribe((res) => {
			//response will be true or false if true move else error
			if (res == true) {
				//emit the event and send aadhaar data with it
				this.success.emit({
					'aadhaarData': this.aadhaarData
				});
			}
			//if wrong otp is entered, reposnse will be false
			else {
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Wrong OTP!',
					footer: 'Enter The Right OTP........',
				})
			}
		}, (err) => {
			//in case of error
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Server Down!',
				footer: 'Please Try Later......',
			})
		})
	}
}
