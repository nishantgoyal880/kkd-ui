import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-delete-profile',
  templateUrl: './farmer-delete-profile.component.html',
  styleUrls: ['./farmer-delete-profile.component.css'],
  providers:[FarmerDetailsService]
})
export class FarmerDeleteProfileComponent implements OnInit {

  public searchedFarmerId: string="KKDFARM1000";
  public delete:boolean;
  rForm: FormGroup;

  constructor(private farmerDetailsService : FarmerDetailsService,private fb: FormBuilder) {
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])]
  });
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
          alert("successfully deleted");
        }
        else{
          alert("incorrect password");
        }
      },(err)=> console.log(err));
    }
    
  }
