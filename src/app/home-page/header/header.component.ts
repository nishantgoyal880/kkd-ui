import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 public loggedIn:any=false;
 public role:any;

 constructor(private idRoleService:IdRoleService) {
   this.idRoleService.role.subscribe((role) =>{
      this.role=role;
      console.log(this.role);
   })
   this.idRoleService.id.subscribe((id) =>{
   })
   this.idRoleService.isLoggedIn.subscribe((log) =>{
      this.loggedIn=log;
      console.log(this.loggedIn);
   })
 }

 ngOnInit() {
 }

 changeOnClickOfLogOut(){
   this.loggedIn=false;
   localStorage.removeItem("token");
 }

}
