//import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

   public searchedFarmerId: string;
   public role: string;
   public farmerPhoto:string;
   public farmerId: string;
   public farmerName : string;
   public farmerPincode: number;
   public farmerAddressLine: string;
   public farmerCity: string;
   public farmerDistrict: string;
   public farmerState: string;
   public farmerPrimary: boolean;
   public farmerMobileNumber : string;

   constructor(private farmerDetailsService : FarmerDetailsService,
    private idRoleService: IdRoleService) {
    this.idRoleService.role.subscribe((role) =>{
      this.role=role;
    })
    this.idRoleService.id.subscribe((id) =>{
      this.searchedFarmerId=id;
    })
    }

  // Function to get farmer details by his KKDId and make service call to get farmer details from app
  searchFarmer(){
    this.farmerDetailsService.getFarmerName(this.searchedFarmerId)
    .subscribe((res) =>{
      if(res && res.aadhaarData) {
      this.farmerPhoto=res.aadhaarData.photoUrl;
      this.farmerId=res.kkdFarmId;
      this.farmerName=res.aadhaarData.firstName;
      this.farmerPhoto=res.aadhaarData.photoUrl;
      this.farmerPincode=res.aadhaarData.permanentAddress.pincode;
      this.farmerAddressLine=res.aadhaarData.permanentAddress.addressLine;
      this.farmerCity=res.aadhaarData.permanentAddress.city;
      this.farmerDistrict=res.aadhaarData.permanentAddress.district;
      this.farmerState=res.aadhaarData.permanentAddress.state;
      this.farmerPrimary=res.aadhaarData.permanentAddress.primary;
      this.farmerMobileNumber=res.mobileNo;
    }
     },(error) =>{
    });
  }
  ngOnInit() {
    this.searchFarmer();
  }
}
