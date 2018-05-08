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
  public currentTab : string;

  constructor(private idRoleService: IdRoleService) { }

  ngOnInit() {
    this.currentTab = 'my-account';
  }

  // Set cuurent tab
  setCurrTab(tab) {
  this.currentTab = tab;
}
}