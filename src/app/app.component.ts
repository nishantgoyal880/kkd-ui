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

	currentLat: any;
	currentLong: any;

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

	verifyToken() {
		this.verifyTokenService.verifyToken(localStorage.getItem("token"))
			.subscribe((res) => {
				console.log(res.results.kkdId + " " + res.results.role)
				this.idRoleService.id.emit(res.results.kkdId);
				this.idRoleService.role.emit(res.results.role);
			}, (err) => {
				alert("Invalid");
			})
	}


	getLocation() {
		if (navigator.geolocation) {
			console.log("inside");
			navigator.geolocation.getCurrentPosition((position) => {
				//alert(position);
				this.currentLat = position.coords.latitude;
				this.currentLong = position.coords.longitude;
				console.log("lat:" + this.currentLat);
				console.log("lon:" + this.currentLong);
				this.getAddress(this.currentLat, this.currentLong)
					.then((location) => {
						swal("You are in " + location);
						//console.log("You are in " +location);
					}
					)
					.catch((error) => {
						console.log(error);
					});
			}, (error) => {
				switch (error.code) {
					case error.PERMISSION_DENIED:
						console.log("User denied the request for Geolocation.");
						break;
					case error.POSITION_UNAVAILABLE:
						console.log("Location information is unavailable.");
						break;
					case error.TIMEOUT:
						console.log("The request to get user location timed out.");
						break;
				}

			});
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

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
