import { Component, OnInit } from '@angular/core';
import { IdRoleService } from '../../../services/id-role/id-role.service'

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {


  public userList;
  public login;

  constructor(private idRoleService: IdRoleService ) { }

  ngOnInit() {
    this.idRoleService.role.subscribe((role) =>{
      console.log('role8888888888888888888')
      console.log(role)
    })

    this.idRoleService.id.subscribe((kkdId) =>{
      console.log(kkdId)
    })
  }
}
