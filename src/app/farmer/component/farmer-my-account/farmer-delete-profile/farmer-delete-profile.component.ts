import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

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
  })
   }

  /* Function to delete farmer's profile by his KKDId
  and make service call to delete farmer's profile from app */
  deleteFarmerProfile(post){
    this.farmerDetailsService.getFarmerName(this.searchedFarmerId)
    .subscribe((res) =>{
      if(post.currentPassword == res.password){
        this.delete=true;
        this.deletingProfile();
      } else{
        swal({
          position: 'top',
          type: 'error',
          title: 'Wrong Password',
          text:'Please Enter Correct Password'
        })
      }     
     },(error) =>{

    });  
  }
  deletingProfile(){
    if(this.delete==true){
      this.farmerDetailsService.deleteFarmerProfile(this.searchedFarmerId).subscribe((data)=>{
        swal({
          position: 'top',
          type: 'success',
          title: 'Your profile has deleted successfully',
          timer: 1500
        })
      },(err)=> console.log(err));
    }
  }

  ngOnInit() {
  }
}
