import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BankDetailsService } from '../../../../services/bank-details.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
/*import {swal} from 'sweetalert2'*/

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

  constructor(private bankDetailsService: BankDetailsService,
    private fb: FormBuilder, public router: Router,
    private idRoleService: IdRoleService) {
    /* validators for the input fields */
    this.rForm = fb.group({
      accountNo : [null, Validators.compose([Validators.required, Validators.minLength(12), Validators.maxLength(12)])],
      accountName : [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(20)])],
      ifscCode : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(12)])],
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
    this.bankDetailsService.saveAccountDetails(localStorage.getItem('id'), this.bankDetailsSubmission).subscribe((res) => {
      alert('Your bank account details has been successfully added.');

    }, (error) => {
      /* logging the error */
      console.log(error);
    });
  }
  ngOnInit() {
  }
}
