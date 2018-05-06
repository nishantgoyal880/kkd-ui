import { Component, OnInit } from '@angular/core';
import { RegistrationLoginService } from '../../services/registration-login-service/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
	selector: 'app-farmer-login',
	templateUrl: './farmer-login.component.html',
	styleUrls: ['./farmer-login.component.css'],
	providers:[ RegistrationLoginService ]
})
export class FarmerLoginComponent implements OnInit {
	//declaring a form group
	rForm: FormGroup;
	//variable to store form data
	post:any;
	constructor(private registrationService: RegistrationLoginService,
		private fb: FormBuilder,
		public router: Router,
		private idRoleService: IdRoleService) {
		//making a form group with fileds mobile number and password
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
		});
	}

	ngOnInit() {
	}

	/*
	*to be called when farmer click login button
	*their credentials will be taken and are verified, it they are valid then token ,id and role is returned, token is stored in local storage 
	*id and role is stored in a common service
	*but if the credentials are not correct a swal will be opened saying invalid credentials
	*/
	loginFarmer(post) {
		//making json format which is to be send with request
		var farmerCredentials={
			'mobileNo':post.mobileNo,
			'password':post.password
		}

		//calling registration service and passing farmer credentials to check
		this.registrationService.loginFarmer(farmerCredentials).subscribe((res) =>{
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
			//if credentials are invalid, 401 Unauthorized code will be there
			if(err.status=401){
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Invalid Credentials!',
					footer: 'Enter Correct Credentials......',
				  })
			}
			else{
				//in case of any other http code like 500
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Server down',
					footer: 'Try Again Later......',
				  })
			}
		})
	}
}
