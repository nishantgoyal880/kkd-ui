import { Component, OnInit } from '@angular/core';
import { IdRoleService } from '../../services/id-role/id-role.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public loggedIn:any=false;
  public role:any;

  constructor(private idRoleService:IdRoleService) { }

  ngOnInit() {
    this.idRoleService.role.subscribe((role) =>{
       this.role=role;
    })
    this.idRoleService.isLoggedIn.subscribe((log) =>{
       this.loggedIn=log;
    })
  }

}
