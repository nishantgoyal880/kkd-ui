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
	rForm: FormGroup;
	post:any;
	mobileNo:String;
	password:String;
	newPassword:String;
	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router,private idRoleService: IdRoleService) {
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])]
		});
	}

	ngOnInit() {
	}

	loginFarmer(post) {
		var farmerCredentials={
			'mobileNo':post.mobileNo,
			'password':post.password
		}

		this.registrationService.loginFarmer(farmerCredentials).subscribe((res) =>{
			localStorage.setItem("token",res.results.token);
			this.idRoleService.id.emit(res.results.kkdFarmId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);

			alert(this.idRoleService.role);
			this.router.navigate(['/farmer/dashboard']);
		}, (err) =>{
			if(err.status=401){
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Invalid Credentials!',
					footer: 'Enter Correct Credentials......',
				  })
			}
			else{
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
