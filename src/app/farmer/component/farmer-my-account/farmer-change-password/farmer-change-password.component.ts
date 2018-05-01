import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-change-password',
  templateUrl: './farmer-change-password.component.html',
  styleUrls: ['./farmer-change-password.component.css'],
  providers:[FarmerDetailsService]
})
export class FarmerChangePasswordComponent implements OnInit {
 
  public searchedFarmerId: string="KKDFARM1001";
  public newPassword:string;
  public reenterNewPassword:string;
  public currentPassword:string;
  public details;
  rForm: FormGroup;

  constructor(private farmerDetailsService : FarmerDetailsService,private fb: FormBuilder) { 
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])],
      newPassword : [null, Validators.compose([Validators.required])],
      reenterNewPassword : [null, Validators.compose([Validators.required])]
  })
  }

  ngOnInit(){
    
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
      let resetPassInfo={
        userId:this.searchedFarmerId,
        currentPassword:post.currentPassword,
        newPassword:post.newPassword
      }
      this.farmerDetailsService.updatePassword(resetPassInfo).subscribe((res:boolean)=>{
        if(res==true){
          swal({
            position: 'top-end',
            type: 'success',
            title: 'Your password has changed successfully',
            showConfirmButton: false,
            timer: 1500
            })
        }
        else{
          swal("Re-enter the password correctly");
        }
      },(error)=>{
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      });
  }
  else{
    swal("Re-enter the new password correctly");
  }
  }
  
}
