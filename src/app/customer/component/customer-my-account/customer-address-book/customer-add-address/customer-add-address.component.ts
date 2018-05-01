import { Component, OnInit } from '@angular/core';
import { CustomerHeaderService } from '../../../../services/customer-header.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-add-address',
  templateUrl: './customer-add-address.component.html',
  styleUrls: ['./customer-add-address.component.css'],
  providers:[CustomerHeaderService]
})
export class CustomerAddAddressComponent implements OnInit {
  public customerId:string="KKDCUST2000";
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
      if(res.addresses==null){
        res.addresses=this.details;
        console.log(res.addresses);
      }else{
     let i=((res.addresses).length);
      res.addresses[i]=this.details;
      }
      console.log(res.addresses);
      console.log(this.details);
    this.customerHeaderService.updateCustomerAddress(this.customerId,res)
    .subscribe((res)=>{
      swal({
        position: 'top-end',
        type: 'success',
        title: 'Your address has been added',
        showConfirmButton: false,
        timer: 1500
      })
    },(error)=>{
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  },(error) =>{
  });
}
ngOnInit() {
}
}
