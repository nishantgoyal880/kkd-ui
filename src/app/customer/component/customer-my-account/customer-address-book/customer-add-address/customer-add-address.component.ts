import { Component, OnInit } from '@angular/core';
import { CustomerHeaderService } from '../../../../services/customer-header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add-address',
  templateUrl: './customer-add-address.component.html',
  styleUrls: ['./customer-add-address.component.css'],
  providers:[CustomerHeaderService]
})
export class CustomerAddAddressComponent implements OnInit {
  public customerId:string="KKDCUST2002";
  public customerMobileNumber : string;
  rForm: FormGroup;
  public details;
  public addresses:Array<object>;

  constructor(private customerHeaderService:CustomerHeaderService,private fb: FormBuilder) {
    this.rForm = fb.group({
      addressLine : [null, Validators.compose([Validators.required])],
      city : [null, Validators.compose([Validators.required])],
      district : [null, Validators.compose([Validators.required])],
      state : [null, Validators.compose([Validators.required])],
      pincode : [null, Validators.compose([Validators.required])]
  })
   }
   updateCustomerAddress(post){
    this.details = {
      "addressLine" : post.addressLine,
      "city" : post.city,
      "district" : post.district,
      "state" : post.state,
      "pincode" : post.pincode,
      "primary" : post.primary
    }
    this.customerHeaderService.searchCustomer(this.customerId)
    .subscribe((res) =>{
     let i=((res.addresses).length)+1;
      res.addresses[i]=this.details;
    this.customerHeaderService.updateCustomerAddress(this.customerId,res)
    .subscribe((res)=>{
    },(error)=>{
    });
  },(error) =>{
  });
}
ngOnInit() {
}
}
