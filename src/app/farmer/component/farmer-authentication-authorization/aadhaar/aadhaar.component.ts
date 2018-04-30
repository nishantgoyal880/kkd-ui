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
	@Output() success = new EventEmitter<any>();
	rForm: FormGroup;
	otpForm: FormGroup;
	post: any;
	aadhaarData: any;
	aadhaarNo: string;
	hideVar: boolean = false;
	mobileNo: string;
	constructor(private registrationService: RegistrationLoginService, public router: Router, private fb: FormBuilder) {
		this.rForm = fb.group({
			'aadhaarNo': [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])]

		});

		this.otpForm = fb.group({
			'otp': [null, Validators.required],
		});

	}

	ngOnInit() {
	}

	sendOtp(post) {
		//call otp service to generate a otp corresponding to aadhaar number else error as aadhaar not found
		this.aadhaarNo = post.aadhaarNo;
		this.getAadhaarData(post);
	}

	verifyOtp(post) {
		var otpData = {
			'mobileNo': this.mobileNo,
			'otp': post.otp
		}
		//call otp service to verify the otp if true then emit a event and send aadhaar data in the event
		this.registrationService.verifyOtp(otpData).subscribe((res) => {
			//response will be true or false if true move else error
			if (res == true) {
				this.success.emit({
					'aadhaarData': this.aadhaarData
				});
			}
			else {
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Wrong OTP!',
					footer: 'Enter The Right OTP........',
				})
			}
		}, (err) => {
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Server Down!',
				footer: 'Please Try Later......',
			})
			//alert("otp-service is down")
		})
	}

	getAadhaarData(post) {
		//call aadhaar service to get aadhaar data
		/*this.registrationService.addhaarData(post.aadhaarNo).subscribe((res) => {
			this.aadhaarData = res;
			//go to otp page
			this.hideVar = true;
			//extract mobile number from aadhaar data and call otp service
			this.mobileNo = this.aadhaarData.mobileNumber;
			this.registrationService.generateOtp(this.mobileNo).subscribe((res) => {
				//sucessfully sended
			}, (err) => {
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Server Down!',
					footer: 'Please Try Later......',
				})
				//alert("otp-service is down")
			})
		}, (err) => {
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Aadhaar Number Not Found!',
				footer: 'Enter Valid Aadhaar Number......',
			})
		})
	}*/
	this.registrationService.addhaarDataVerify(post.aadhaarNo).subscribe((res) => {
				//sucessfully sended
				this.aadhaarData = res;
			//go to otp page
			this.hideVar = true;
		}, (err) => {
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Aadhaar Number Not Found!',
				footer: 'Enter Valid Aadhaar Number......',
			})
		})

}
}
