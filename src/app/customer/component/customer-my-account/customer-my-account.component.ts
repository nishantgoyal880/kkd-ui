import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import{CustomerAuthenticationService} from '../../services/customer-authentication.service';
import{UserDetails} from '../../config/user-details.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-my-account',
  templateUrl: './customer-my-account.component.html',
  styleUrls: ['./customer-my-account.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerMyAccountComponent implements OnInit {
  post:any;
  rForm: FormGroup;
  rFormDeleteProfile : FormGroup;
  public mobileNumber:string="";
  public currentPassword: string="";
  public newPassword: string="";
  public reenterNewPassword: string="";
  public userDetails ={
    "currentPassword": "",
    "newPassword": "",
    "userId": ""
  };
  public userDetailsDelete={
    "addresses": [
      {
        "addressLine": "string",
        "city": "string",
        "district": "string",
        "pincode": 0,
        "primary": false,
        "state": "string"
      }
    ],
    "bankDetails": {
      "accountName": "string",
      "accountNo": "string",
      "ifscCode": "string"
    },
    "firstName": "string",
    "kkdCustId": "string",
    "lastName": "string",
    "mobileNo": "2424214244",
    "password": "Sriz",
    "primaryAddress": {
      "addressLine": "string",
      "city": "string",
      "district": "string",
      "pincode": 0,
      "primary": false,
      "state": "string"
    },
    "role": "string"
  };
  public mobileNumberDeleteProfile : string="";
  public currentPasswordDeleteProfile: string="";

  constructor(private customerAuthenticationService :CustomerAuthenticationService,private fb: FormBuilder,public router: Router) { 
    this.rForm = fb.group({
    mobileNumber : [null, Validators.compose([Validators.required])],
    currentPassword : [null, Validators.compose([Validators.required])],
    newPassword : [null, Validators.compose([Validators.required])],
    reenterNewPassword: [null, Validators.compose([Validators.required])],
})
   this.rFormDeleteProfile = fb.group({
    mobileNumberDeleteProfile : [null, Validators.compose([Validators.required])],
    currentPasswordDeleteProfile : [null, Validators.compose([Validators.required])],
  })
}

  ngOnInit() {}
  
  onSubmit(post){
  this.mobileNumber=post.mobileNumber;
  this.currentPassword=post.currentPassword;
  this.newPassword=post.newPassword;
  this.reenterNewPassword=post.reenterNewPassword;
  var regularExpression  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!(isNaN(+this.mobileNumber)) && this.mobileNumber.length==10 ){
    if(this.currentPassword.length && this.newPassword.length && this.reenterNewPassword.length ){
    if(regularExpression.test(this.newPassword)){
      if(this.newPassword == this.reenterNewPassword)
    {
      this.customerAuthenticationService.getUserDetails(this.mobileNumber)
            .subscribe((res) =>{
            if(!(res == null)){
                  this.userDetails.currentPassword=this.currentPassword;
                  this.userDetails.userId=res.kkdCustId;
                  this.userDetails.newPassword=this.newPassword;
                  this.customerAuthenticationService.updatePassword(this.userDetails )
                  .subscribe((updatedInfo) =>{
                    if( updatedInfo == true){
                      swal({
                        position: 'center',
                        type: 'success',
                        title: 'Password changed successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    }else{
                      swal({
                        type: 'error',
                        title: 'Incorrect Password',
                        text: 'Please enter the correct current password',
                      })
                    }
                    }, (error) =>{
                      swal({
                        type: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong! Try after some time',
                      })
                    })
           }else{
            swal({
              type: 'error',
              title: 'Incorrect mobile number',
              text: 'Mobile number is not registered',
            })
            }
            }, (error) =>{
              swal({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Try after some time',
              })
            })
          }
    else{
      swal({
        type: 'error',
        title: 'Passwords mismatch',
        text: 'Re-enter the new password correctly',
      })
    }}
    else{
      swal({
        type: 'error',
        title: 'Invalid Password format',
        text: "New password must contain at least one number and one uppercase"+ 
        " and one lowercase and one special case, and at least 8 characters",
      })
      }}
    else{
      swal({
        type: 'error',
        title: 'Empty fields',
        text: 'Please fill all the fields',
      })
    }}
    else{
      swal({
        type: 'error',
        title: 'Invalid mobile number format',
        text: 'Enter a valid mobile number of 10 digits' ,
      })
    }
  }
  
deleteUser(post){
    this.mobileNumberDeleteProfile=post.mobileNumberDeleteProfile;
    this.currentPasswordDeleteProfile=post.currentPasswordDeleteProfile;
    if(!(isNaN(+this.mobileNumberDeleteProfile)) && this.mobileNumberDeleteProfile.length==10 ){
    if(this.currentPasswordDeleteProfile.length){
      this.userDetailsDelete.mobileNo=this.mobileNumberDeleteProfile;
      this.userDetailsDelete.password = this.currentPasswordDeleteProfile;
      this.customerAuthenticationService.deleteProfile(this.userDetailsDelete)
            .subscribe((status) =>{
              if(!(status == null)){
              if( status == true){
                swal({
                  position: 'center',
                  type: 'success',
                  title: 'Profile deleted successfully',
                  showConfirmButton: false,
                  timer: 1500
                })
              }else{
                swal({
                  type: 'error',
                  title: 'Incorrect Password',
                  text: 'Please enter the correct current password',
                })
              }}else{
                swal({
                  type: 'error',
                  title: 'Incorrect mobile number',
                  text: 'Mobile number is not registered',
                })
              }
         }, (error) =>{
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        })}else{
          swal({
            type: 'error',
            title: 'Empty password field',
            text: 'Password field cannot be empty',
          })
  }}else{
    swal({
      type: 'error',
      title: 'Invalid mobile number format',
      text: 'Enter a valid mobile number of 10 digits' ,
    })
  }
}
}
