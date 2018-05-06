import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-authentication-authorization',
  templateUrl: './farmer-authentication-authorization.component.html',
  styleUrls: ['./farmer-authentication-authorization.component.css']
})
export class FarmerAuthenticationAuthorizationComponent implements OnInit {
  	//declaring variable to store aadhaar data
	aadhaarData:any;
	constructor() { }

	ngOnInit() {
	}
	//collecting the data emmited by aadhaar component
	getAadhaarData(event) {
		this.aadhaarData = event.aadhaarData;
	}
}
