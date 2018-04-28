import { Component, OnInit } from '@angular/core';
import { FarmerHeaderService } from '../../../services/farmer-header/farmer-header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-alternate-mobile',
  templateUrl: './farmer-alternate-mobile.component.html',
  styleUrls: ['./farmer-alternate-mobile.component.css'],
  providers:[FarmerHeaderService]
})
export class FarmerAlternateMobileComponent implements OnInit {

  public searchedFarmerId: string="KKDFARM1000";
  rForm: FormGroup;

  constructor(private farmerHeaderService : FarmerHeaderService,private fb: FormBuilder) { 
    this.rForm = fb.group({
      alternateMobileNumber : [null, Validators.compose([Validators.required])]
  })
  }
   /* Function to update farmer's mobile number by his KKDId
  and make service call to update farmer's mobile number from app */
  updateFarmerMobile(post){
    this.farmerHeaderService.getFarmerName(this.searchedFarmerId)
             .subscribe((res) =>{
                   res.alternateNo = post.alternateMobileNumber;
                   this.farmerHeaderService.updateFarmerMobile(this.searchedFarmerId,res)
                   .subscribe((updatedInfo) =>{  
                    swal({
                      position: 'top-end',
                      type: 'success',
                      title: 'Your alternate mobile number has updated',
                      showConfirmButton: false,
                      timer: 1500
                    })        
                     }, (error) =>{
                      swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                     });            
             }, (error) =>{
             });
  }
  ngOnInit() {
  }
}




