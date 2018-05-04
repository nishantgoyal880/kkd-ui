import { Component, OnInit } from "@angular/core";
import { CustomerHeaderService } from "../../../../services/customer-header.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import swal from "sweetalert2";

@Component({
  selector: "app-customer-add-address",
  templateUrl: "./customer-add-address.component.html",
  styleUrls: ["./customer-add-address.component.css"],
  providers: [CustomerHeaderService]
})
export class CustomerAddAddressComponent implements OnInit {
  public customerId: string = "KKDCUST2000";
  rForm: FormGroup;
  public details;
  public addresses: Array<any> = [];

  constructor(
    private customerHeaderService: CustomerHeaderService,
    private fb: FormBuilder
  ) {
    this.rForm = fb.group({
      addressLine: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      district: [null, Validators.compose([Validators.required])],
      state: [null, Validators.compose([Validators.required])],
      pincode: [null, Validators.compose([Validators.required])]
    });
  }
  updateCustomerAddress(post) {
    this.details = {
      addressLine: post.addressLine,
      city: post.city,
      district: post.district,
      state: post.state,
      pincode: post.pincode,
      primary: post.primary
    };
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
  ngOnInit() {}
}
