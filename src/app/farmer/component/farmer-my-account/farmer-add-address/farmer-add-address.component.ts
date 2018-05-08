import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-add-address',
  templateUrl: './farmer-add-address.component.html',
  styleUrls: ['./farmer-add-address.component.css'],
  providers: [FarmerDetailsService, IdRoleService]
})
export class FarmerAddAddressComponent implements OnInit {

  public searchedFarmerId: string;
  public farmerMobileNumber: string;
  public role: string;
  rform: FormGroup;
  public details;
  constructor(private farmerDetailsService: FarmerDetailsService,
    private formBuilder: FormBuilder, private idRoleService: IdRoleService) {
    this.rform = formBuilder.group({
      addressLine: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      pincode: [null, Validators.compose([Validators.required])]
    })
    this.idRoleService.role.subscribe((role) => {
      this.role = role;
    })
    this.idRoleService.id.subscribe((id) => {
      this.searchedFarmerId = id;
    })
  }

  /* 
  Function to update farmer's address by his mobile number
  and  make service call to get farmer's mobile number and
  update farmer's alternate address from app
  */
  updateFarmerAddress(post) {
    this.details = {
      "addressLine": post.addressLine,
      "city": post.city,
      "district": post.district,
      "state": post.state,
      "pincode": post.pincode
    }
    //service call to get farmer's mobile number
    this.farmerDetailsService.getFarmerName(this.searchedFarmerId)
      .subscribe((res) => {
        //service call to update farmer's alternate address via his mobile number
        this.farmerDetailsService.updateFarmerAddress(res.mobileNo, this.details)
          .subscribe((res) => {
            swal({
              position: 'top',
              type: 'success',
              title: 'Your address has been updated',
              showConfirmButton: false,
              timer: 1500
            })
          }, (error) => {
            swal({
              type: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            })
          });
      }, (error) => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      });
  }
  ngOnInit() {
  }
}




