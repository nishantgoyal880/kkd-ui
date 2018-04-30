import { Component, OnInit ,Output, EventEmitter , Input} from '@angular/core';
import { RegistrationLoginService } from '../../registration-login-services/registration-login.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css'],
  providers:[RegistrationLoginService],
})
export class CustomerLoginComponent implements OnInit {
	rForm: FormGroup;
	post:any;
	mobileNo:String;
	password:String;
	newPassword:String;
	select : any=0;

	constructor(private registrationService: RegistrationLoginService,private fb: FormBuilder,public router: Router) {
		this.rForm = fb.group({
			'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
			'password': [null, Validators.compose([Validators.required, Validators.maxLength(12), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")])]
		});
	}

	ngOnInit() {
	}

	loginCustomer(post) {
		var customerCredentials={
			'mobileNo':post.mobileNo,
			'password':post.password
		}

		this.registrationService.loginCustomer(customerCredentials).subscribe((res) =>{
			localStorage.removeItem('token');
			localStorage.setItem("token",res.results.token);
			localStorage.setItem("kkdCustId",res.results.kkdCustId);
			this.router.navigate(['customer/myAccount']);
		}, (err) =>{
			if(err.status==401){
				swal({
					type: 'error',
					title: 'Oops...',
					text: 'Invalid Credentials!',
					footer: '<b>Enter Correct Credentials......</b>',
				  })
			}
			else{
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
