import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-change-password',
  templateUrl: './farmer-change-password.component.html',
  styleUrls: ['./farmer-change-password.component.css'],
  providers:[FarmerDetailsService, IdRoleService]
})
export class FarmerChangePasswordComponent implements OnInit {
 
  public searchedFarmerId: string;
  public role: string;
  public newPassword:string;
  public reenterNewPassword:string;
  public currentPassword:string;
  public details;
  rForm: FormGroup;

  constructor(private farmerDetailsService : FarmerDetailsService,
    private fb: FormBuilder,private idRoleService: IdRoleService) { 
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])],
      newPassword : [null, Validators.compose([Validators.required])],
      reenterNewPassword : [null, Validators.compose([Validators.required])]
  })
  this.idRoleService.role.subscribe((role) =>{
    this.role=role;
  })
  this.idRoleService.id.subscribe((id) =>{
    this.searchedFarmerId=id;
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
