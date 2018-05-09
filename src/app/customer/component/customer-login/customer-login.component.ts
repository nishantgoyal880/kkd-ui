import { Component, OnInit ,Output, EventEmitter , Input} from '@angular/core';
import { RegistrationLoginService } from '../../registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
	selector: 'app-customer-login',
	templateUrl: './customer-login.component.html',
	styleUrls: ['./customer-login.component.css'],
	providers:[RegistrationLoginService],
})
export class CustomerLoginComponent implements OnInit {
	//declaring a form group
	rForm: FormGroup;
	//variable to store form data
	post:any;
	constructor(private registrationService: RegistrationLoginService,
		private fb: FormBuilder,public router: Router,
		private idRoleService: IdRoleService) {
		//making a form group with fileds mobile number and password
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])]
		});
	}

	ngOnInit() {
	}

	/*
	*to be called when customer click login button
	*their credentials will be taken and are verified, it they are valid then token ,id and role is returned, token is stored in local storage
	*id and role is stored in a common service
	*but if the credentials are not correct a swal will be opened saying invalid credentials
	*/
	loginCustomer(post) {
		//json data to be send to the registration service
		var customerCredentials={
			'mobileNo':post.mobileNo,
			'password':post.password
		}
		//calling registration service and sending customer credentials
		this.registrationService.loginCustomer(customerCredentials).subscribe((res) =>{
			//in case of response
			//storing token in local storage
			localStorage.setItem("token",res.results.token);
			localStorage.setItem("id",res.results.kkdCustId);
			//passing id and role to the service and emmiting a log in event which will be used in the header
			this.idRoleService.id.emit(res.results.kkdCustId);
			this.idRoleService.role.emit(res.results.role);
			this.idRoleService.isLoggedIn.emit(true);
			this.router.navigate(['productList']);
		}, (err) =>{
			if(err.status==401){
				//if credentials are invalid, 401 Unauthorized code will be there
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Invalid Credentials!',
					footer: '<b>Enter Correct Credentials......</b>',
				})
			}
			else{
				//in case of any other http code like 500
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Server down',
					footer: '<b>Try Again Later......</b>',
				})

			}
		})
	}
}
