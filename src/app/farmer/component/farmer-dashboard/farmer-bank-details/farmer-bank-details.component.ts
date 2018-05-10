import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankDetailsService } from '../../../../services/bank-details.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-farmer-bank-details',
  templateUrl: './farmer-bank-details.component.html',
  styleUrls: ['./farmer-bank-details.component.css'],
  providers: [BankDetailsService]
})
export class FarmerBankDetailsComponent implements OnInit {

  /* form to get farmer's bank details */
  rForm: FormGroup;
  accountNo: String;
  accountName: String;
  ifscCode: String;
  farmerId: String;
  post: any;
  bankDetailsSubmission;
  flag:boolean;

  constructor(private bankDetailsService: BankDetailsService,
    private fb: FormBuilder, public router: Router,
    private idRoleService: IdRoleService) {
    /* validators for the input fields */
    this.rForm = fb.group({
      accountNo : [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      accountName : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      ifscCode : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
      contactNo : [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'rad':[null,Validators.required]
  });
      }

  /* storing the data in object and saving it into the database using bankDetailsService */
  addBankDetails(post) {
  this.bankDetailsSubmission = {
      'accountNo' : post.accountNo,
      'accountName' : post.accountName,
      'ifscCode': post.ifscCode,
    };
    // this.bankDetailsService.saveAccountDetails(this.farmerId,this.bankDetailsSubmission).subscribe((res) => {
    /* Getting farmer's id from local storage */
    if(this.flag===false){
      swal({
        position: 'center',
        type: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    }
    else{
    this.bankDetailsService.saveAccountDetails(localStorage.getItem('id'), this.bankDetailsSubmission).subscribe((res) => {
      // alert('Your bank account details has been successfully added.');
      swal({
        position: 'center',
        type: 'success',
        title: 'Your bank details has been saved',
        showConfirmButton: false,
        timer: 1500
      });

    }, (error) => {
      /* logging the error */
      console.log(error);
    });
  }
  }

  // Make flag=true for bank details | false for paytm details
  radioClick(flag){
    this.flag=flag;     
    console.log(flag);

    if (this.flag==false) {
      this.rForm.get('accountNo').disable();
      this.rForm.get('accountName').disable();
      this.rForm.get('ifscCode').disable();
      this.rForm.get('contactNo').enable();
    }
    else{
      this.rForm.get('accountNo').enable();
      this.rForm.get('accountName').enable();
      this.rForm.get('ifscCode').enable();
      this.rForm.get('contactNo').disable();
    }
  }

  ngOnInit() {
  }
}
