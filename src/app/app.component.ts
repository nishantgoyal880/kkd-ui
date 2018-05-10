import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerifytokenService } from './services/verify-token/verifytoken.service'
import { IdRoleService } from './services/id-role/id-role.service'
import { } from '@types/googlemaps';
import swal from 'sweetalert2';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [VerifytokenService]
})
export class AppComponent implements OnInit {

	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

	isTracking = false;

	public currentLat: any;
	public currentLong: any;
	public city: any;

	constructor(
		public router: Router,
		private verifyTokenService: VerifytokenService,
		private idRoleService: IdRoleService
	) {


	}

	ngOnInit() {

		this.getLocation();
		if (!localStorage.getItem("token")) {
			this.router.navigate(['/home']);
		}
		else {
			this.verifyToken();
		}

	}
	//verify token and get role and id
	verifyToken() {
		this.verifyTokenService.verifyToken(localStorage.getItem("token"))
			.subscribe((res) => {
				//console.log(res.results.kkdId + " " + res.results.role)
				this.idRoleService.id.emit(res.results.kkdId);
				IdRoleService.id1 = res.results.kkdId;
				this.idRoleService.role.emit(res.results.role);
				IdRoleService.role1 = res.results.role;
				this.idRoleService.isLoggedIn.emit(true);
				IdRoleService.isLoggedIn1 = true;
			}, (err) => {
				alert("Invalid");
			})
	}

	// Get user coordinates through its browser
	getLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
				//alert("lat:" + this.currentLat);
				//alert("lon:" + this.currentLong);
				this.getAddress(this.currentLat, this.currentLong)
					.then((location) => {
						this.city = location;
						if (this.city !== null)
							localStorage.setItem("user-location", this.city);
						else
							localStorage.setItem("user-location", "Gurgaon");
					}
					)
					.catch((error) => {
						swal({
							type: 'error',
							title: 'Oops...',
							text: 'Something went wrong!',
						  })
						//console.log(error);
					});
			}, (error) => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						//console.log("User denied the request for Geolocation.");
						break;
					case error.POSITION_UNAVAILABLE:
						//console.log("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						this.city = "Gurgaon";
						localStorage.setItem("user-location", this.city);
						break;
				}

			}, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
		} else {
			//console.log("Geolocation is not supported by this browser.");
		}
	}
	//convert user location coordinates to address

	getAddress(latitude, longitude) {
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();

			var method = 'GET';
			var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&sensor=true';
			var async = true;

			request.open(method, url, async);
			request.onreadystatechange = function () {
				if (request.readyState == 4) {
					if (request.status == 200) {
						var data = JSON.parse(request.responseText);
						var address = data.results[0].formatted_address;
						var city = data.results[0].address_components[5].long_name;
						resolve(city);
					}
					else {
						reject(request.status);
					}
				}
			};
			request.send();
		});
	};
}
