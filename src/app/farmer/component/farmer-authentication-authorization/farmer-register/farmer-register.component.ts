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
	rForm: FormGroup;
	post:any;
	mobileNo:String;
	password:String;
	confirmPassword:String;
	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router,private idRoleService: IdRoleService) {
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
			'confirmPassword' : ['',[Validators.required]],
			'cities' : [false, Validators.required],
		},{validator: this.checkIfMatchingPasswords});
	}

	ngOnInit() {
		this.rForm.get('mobileNo').setValue(this.aadhaarDataRecievedByRegister.mobileNumber);
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

	//function to register a farmer
	registerFarmer(post) {
		var farmerToRegister={
			'mobileNo':this.aadhaarDataRecievedByRegister.mobileNumber,
			'password':post.password,
			'aadhaarData':this.aadhaarDataRecievedByRegister,
			'cities': post.cities
		}
		this.registrationService.addFarmer(farmerToRegister).subscribe((res) =>{
			localStorage.setItem("token",res.results.token);
			this.idRoleService.id.emit(res.results.kkdFarmId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);
			alert(this.idRoleService.role)
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			swal({
				type: 'error',
				title: 'Oops...',
				text: 'Already Registered!',
				footer: 'So Directly Login......',
			})
		})
	}
}
