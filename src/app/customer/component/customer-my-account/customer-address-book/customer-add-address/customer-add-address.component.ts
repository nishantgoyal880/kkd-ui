import { Component, OnInit } from "@angular/core";
import { CustomerHeaderService } from "../../../../services/customer-header.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import swal from "sweetalert2";
import { IdRoleService } from '../../../../../services/id-role/id-role.service';

@Component({
  selector: "app-customer-add-address",
  templateUrl: "./customer-add-address.component.html",
  styleUrls: ["./customer-add-address.component.css"],
  providers: [CustomerHeaderService]
})
export class CustomerAddAddressComponent implements OnInit {
  public customerId: string;
  public role:string;
  rForm: FormGroup;
  public details;
  public addresses: Array<any> = [];

  constructor(
    private customerHeaderService: CustomerHeaderService,
    private formBuilder: FormBuilder, private idRoleService: IdRoleService
  ) {
    this.rForm = formBuilder.group({
      addressLine: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      pincode: [null, Validators.compose([Validators.required])]
    });
    this.idRoleService.role.subscribe((role) =>{
      this.role=role;
    });
    this.idRoleService.id.subscribe((id) =>{
      this.customerId=id;
  });
  }

  /*
  Function to add customer's address by his KKDId and
  make service call to add customer's address from UserDetails
  */
  updateCustomerAddress(post) {
    this.details = {
      addressLine: post.addressLine,
      city: post.city,
      district: post.district,
      state: post.state,
      pincode: post.pincode,
      primary: post.primary
    };
    //service call to update customer's address by his Id
    this.customerHeaderService
      .updateCustomerAddress(this.customerId, this.details)
      .subscribe(
      data => {
        swal({
          position: "top-end",
          type: "success",
          title: "Your address has been added",
          showConfirmButton: false,
          timer: 1500
        });
      },
      err => {
        swal({
          type: "error",
          title: "Oops...",
          text: "Something went wrong!"
        });
      }
      );
  }
  ngOnInit() { }
}
