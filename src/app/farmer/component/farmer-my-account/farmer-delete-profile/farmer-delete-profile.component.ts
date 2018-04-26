import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-farmer-delete-profile',
  templateUrl: './farmer-delete-profile.component.html',
  styleUrls: ['./farmer-delete-profile.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerDeleteProfileComponent implements OnInit {

  public searchedFarmerId: string="KKDFARM1001";
  public delete:boolean;
  rForm: FormGroup;

  constructor(private farmerHeaderService : FarmerHeaderService,private fb: FormBuilder) {
    this.rForm = fb.group({
      currentPassword : [null, Validators.compose([Validators.required])]
  })
   }

  /* Function to delete farmer's profile by his KKDId
  and make service call to delete farmer's profile from app */
  deleteFarmerProfile(post){
    this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
    .subscribe((res) =>{
      if(post.currentPassword == res.password){
        this.delete=true;
        this.deletingProfile();
      } else{
        alert("Incorrect current password");
      }     
     },(error) =>{

    });  
  }
  deletingProfile(){
    if(this.delete==true){
      this.farmerHeaderService.deleteFarmerProfile(this.searchedFarmerId).subscribe((data)=>{
        alert("Successfully Deleted");
      },(err)=> console.log(err));
    }
  }

  ngOnInit() {
  }
}
