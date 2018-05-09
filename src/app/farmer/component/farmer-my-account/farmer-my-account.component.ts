import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../services/farmer-details/farmer-details.service';
import { IdRoleService } from '../../../services/id-role/id-role.service';

@Component({
  selector: 'app-farmer-my-account',
  templateUrl: './farmer-my-account.component.html',
  styleUrls: ['./farmer-my-account.component.css'],
  providers:[FarmerDetailsService]
})
export class FarmerMyAccountComponent implements OnInit {
   public farmerInfo:object;
   constructor(private farmerDetailsService : FarmerDetailsService,
    private idRoleService: IdRoleService) {
    }

 // farmer details are fetched on ngOnInit
  ngOnInit() {
    this.farmerDetailsService.getFarmerName(localStorage.getItem("id"))
    .subscribe((res) =>{
      this.farmerInfo=res;},
      (err)=> {
        console.log(err);
      });
  }
}
