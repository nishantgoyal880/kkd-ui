import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerifytokenService } from './services/verify-token/verifytoken.service'
import { IdRoleService } from './services/id-role/id-role.service'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [VerifytokenService]
})
export class AppComponent {
	constructor(
		public router: Router,
		private verifyTokenService: VerifytokenService,
		private idRoleService: IdRoleService
		){
		if(!localStorage.getItem("token")){
			this.router.navigate(['/home']);
		}
		else{
			this.verifyToken();
		}
	}

	verifyToken(){
		this.verifyTokenService.verifyToken(localStorage.getItem("token"))
		.subscribe((res) =>{ 
			this.idRoleService.id=res.results.kkdId;
			this.idRoleService.role=res.results.role;
		}, (err) =>{
			alert("Invalid");
		})
	}
}