import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';

@Component({
 selector: 'app-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

 public loggedIn:any=true;
 public role:any;
 @Input() city: any;

 constructor(private idRoleService:IdRoleService) {
   console.log("Header Component------------");
   this.idRoleService.role.subscribe((role) =>{
     console.log("In header role")
     console.log(role)
     this.role=role;
   })
   this.idRoleService.id.subscribe((id) =>{
     console.log("In header id")
     console.log(id)
   })
 }

 ngOnInit() {
 }

}
