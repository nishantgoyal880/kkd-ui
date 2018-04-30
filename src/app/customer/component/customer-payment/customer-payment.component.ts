import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from "sweetalert2";

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {

  rForm: FormGroup;   //Form Group element
  public flag: Boolean = false;   //Flag assigned to radio buttons to check for COD/Online payment

  ngOnInit() {
  }

  constructor(private fb: FormBuilder) {    //Initialise form element and specify the validations
    this.rForm = fb.group({
      'cardNumber': [null, Validators.compose([Validators.required, Validators.minLength(16), Validators.maxLength(16)])],
      'expiryMonth': [null, Validators.compose([Validators.required, Validators.maxLength(2), Validators.minLength(1)])],
      'expiryYear': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(2)])],
      'cvCode': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(3)])],
      'rad':[null,Validators.required]
    });
  }

  radioClick(para) {    
    this.flag = para;
    if (this.flag) {    //If flag is true COD is selected. Thus disable the text fields
      this.rForm.get('cardNumber').disable();
      this.rForm.get('expiryMonth').disable();
      this.rForm.get('expiryYear').disable();
      this.rForm.get('cvCode').disable();
    }
    else {            //If flag is flase, Online payment is selected.Thus, enable the text fields
      this.rForm.get('cardNumber').enable();
      this.rForm.get('expiryMonth').enable();
      this.rForm.get('expiryYear').enable();
      this.rForm.get('cvCode').enable();
    }
  }

  makePayment(data) {     //Function called when submit button is pressed
  	swal(                 //Display sweet alert
  		'Thank You!',
  		'Your order has been placed',
  		'success'
  		)
  }
}
