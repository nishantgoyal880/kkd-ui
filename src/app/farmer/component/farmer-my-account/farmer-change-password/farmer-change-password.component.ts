import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-change-password',
  templateUrl: './farmer-change-password.component.html',
  styleUrls: ['./farmer-change-password.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerChangePasswordComponent implements OnInit {
 
  public searchedFarmerId: string="KKDFARM1000";
  public newPassword:string;
  public reenterNewPassword:string;
  public currentPassword:string;
  public details;
  rForm: FormGroup;

  constructor(private farmerHeaderService : FarmerHeaderService,private fb: FormBuilder) { 
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])],
      newPassword : [null, Validators.compose([Validators.required])],
      reenterNewPassword : [null, Validators.compose([Validators.required])]
  })
  }
  /* Function to change farmer's password by his KKDId
  and make service call to change farmer's password from app */
  resetPassword(post){
    this.details = {
      "currentPassword" : post.currentPassword,
      "newPassword" : post.newPassword,
      "reenterNewPassword" : post.reenterNewPassword
    }    
    if(this.newPassword == this.reenterNewPassword)
    {
       this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
             .subscribe((res) =>{
             if(this.currentPassword == res.password){
                   res.password = this.newPassword;
                   this.farmerHeaderService.updateFarmerMobile(this.searchedFarmerId ,res )
                   .subscribe((updatedInfo) =>{
                     if(this.newPassword == updatedInfo.password){
                       alert("Password changed successfully");
                     }
                     }, (error) =>{
                     })
             }else{
               alert("Incorrect current password");
             }
             }, (error) =>{
             })
          }
    else{
      alert("Re-enter the new password correctly");
    }
  }
  ngOnInit() {
  }
}
