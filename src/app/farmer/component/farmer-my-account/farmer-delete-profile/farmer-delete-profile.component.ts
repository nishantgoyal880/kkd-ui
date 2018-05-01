import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-delete-profile',
  templateUrl: './farmer-delete-profile.component.html',
  styleUrls: ['./farmer-delete-profile.component.css'],
  providers:[FarmerDetailsService, IdRoleService]
})
export class FarmerDeleteProfileComponent implements OnInit {

  public searchedFarmerId: string;
  public role: string;
  public delete:boolean;
  rForm: FormGroup;

  constructor(private farmerDetailsService : FarmerDetailsService,
    private fb: FormBuilder,private idRoleService: IdRoleService) {
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])]
  });
  this.idRoleService.role.subscribe((role) =>{
    this.role=role;
  })
  this.idRoleService.id.subscribe((id) =>{
    this.searchedFarmerId=id;
  })
   }
   ngOnInit(){

  }

  /* Function to delete farmer's profile by his KKDId
  and make service call to delete farmer's profile from app */
  deleteFarmerProfile(post){
    let userInfo={
      kkdFarmId:this.searchedFarmerId,
      password:post.currentPassword
    };
    this.farmerDetailsService.deleteFarmerProfile(userInfo).subscribe((data:boolean)=>{
        if(data==true){
          swal({
            position: 'top',
            type: 'success',
            title: 'Your profile has deleted successfully',
            timer: 1500
          })
        }
        else{
          swal({
            position: 'top',
            type: 'error',
            title: 'Wrong Password',
            text:'Please Enter Correct Password'
          })
        }
      },(err)=> console.log(err));
    }
    
  }
