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
    private fb: FormBuilder,public router: Router,
    private idRoleService: IdRoleService) {
  this.rForm = fb.group({
      accountNo : [null, Validators.compose([Validators.required,Validators.minLength(12),Validators.maxLength(12)])],
      accountName : [null, Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(20)])],
      ifscCode : [null, Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(12)])],
  });
    this.idRoleService.id.subscribe((id) => {
      this.farmerId = id;
    })
  }

  /* storing the data in object and saving it into the database using bankDetailsService */
  addBankDetails(post) {
  this.bankDetailsSubmission = {
      'accountNo' : post.accountNo,
      'accountName' : post.accountName,
      'ifscCode': post.ifscCode,
    };
    console.log(this.farmerId);
    this.bankDetailsService.saveAccountDetails(this.farmerId,this.bankDetailsSubmission).subscribe((res) => {

      alert('Your bank account details has been successfully added.');

    }, (error) => {
      console.log(error);

    });
  }
  ngOnInit() {
  }
}
