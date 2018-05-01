import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 public loggedIn:any=true;
 public role:any;

 constructor(private idRoleService:IdRoleService) {
   console.log("Header Component------------");

    // idRoleService.role.subscribe((data: any) =>{this.role = data;console.log(this.role)},(err)=>{
   // })
 }



 ngOnInit() {
 }

}
