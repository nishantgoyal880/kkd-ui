import { Component, OnInit,Input } from '@angular/core';
import { RegistrationLoginService } from '../../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../../services/id-role/id-role.service'

@Component({
	selector: 'app-farmer-register',
	templateUrl: './farmer-register.component.html',
	styleUrls: ['./farmer-register.component.css'],
	providers:[ RegistrationLoginService ]
})
export class FarmerRegisterComponent implements OnInit {
	@Input() aadhaarDataRecievedByRegister:any;
		//declaring a form group
		rForm: FormGroup;
		//variable to store form data
		post:any;
		constructor(private registrationService: RegistrationLoginService,
			private fb: FormBuilder,
			public router: Router,
			private idRoleService: IdRoleService) {
			//making a form group with fileds mobile number, password, confirm password and cities
			this.rForm = fb.group({
				'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
				'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
				'confirmPassword' : ['',[Validators.required]],
				'cities' : [false, Validators.required],
			},{validator: this.checkIfMatchingPasswords});
		}

		ngOnInit() {
			//setting the mobile number as the number coming from aadhaar
			this.rForm.get('mobileNo').setValue(this.aadhaarDataRecievedByRegister.mobileNo);
			//disabling the mobile number
			this.rForm.get('mobileNo').disable();
		}

	//check if new password and confirm password is same
	checkIfMatchingPasswords(group: FormGroup) {
		let passwordField= group.controls.password,
		confirmPasswordField = group.controls.confirmPassword;
		if(passwordField.value !== confirmPasswordField.value ) {
			return confirmPasswordField.setErrors({notEquivalent: true})
		}else {
			return confirmPasswordField.setErrors(null);
		}
	}

	/*
	*to be called when farmer click register button
	*their aadhaar data will be taken and passed to the registration service, and if the user is eligible to register ,id and role is returned, 
	*token is stored in local storage 
	*id and role is stored in a common service
	*but if the user is not eligible a swal will be opened saying already registerd or service not working
	*/
	registerFarmer(post) {
		//making json format which is to be send with request
		var farmerToRegister={
			'mobileNo':this.aadhaarDataRecievedByRegister.mobileNumber,
			'password':post.password,
			'aadhaarData':this.aadhaarDataRecievedByRegister,
			'cities': post.cities
		}
		//calling registration service and passing farmer data
		this.registrationService.addFarmer(farmerToRegister).subscribe((res) =>{
			//in case of response
			//storing token in local storage
			localStorage.setItem("token",res.results.token);
			//passing id and role to the service and emmiting a log in event which will be used in the header
			this.idRoleService.id.emit(res.results.kkdFarmId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);
			//routing to farmer dashboard
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			//if the user is not eligible a swal will be opened saying already registerd 
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Already Registered!',
				footer: 'So Directly Login......',
			})
		})
	}
}
