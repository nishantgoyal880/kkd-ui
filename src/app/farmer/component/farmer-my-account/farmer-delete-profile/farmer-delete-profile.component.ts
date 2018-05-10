import { Component, OnInit } from '@angular/core';
import { FarmerDetailsService } from '../../../services/farmer-details/farmer-details.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';
import { RegistrationLoginService } from '../../../services/registration-login-service/registration-login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmer-delete-profile',
  templateUrl: './farmer-delete-profile.component.html',
  styleUrls: ['./farmer-delete-profile.component.css'],
  providers:[FarmerDetailsService,RegistrationLoginService]
})
export class FarmerDeleteProfileComponent implements OnInit {

  public searchedFarmerId: string;
  public role: string;
  public delete:boolean;
  rForm: FormGroup;
  public hideVar:boolean=false;
  public mobileNo:string;
  public password:string;
  //variable for otp form group
  otpForm: FormGroup;
  constructor(private registrationService: RegistrationLoginService,
    private farmerDetailsService : FarmerDetailsService,
    private formBuilder: FormBuilder,
    public router: Router) {
    this.rForm = formBuilder.group({
      'mobileNo': [null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
      'currentPassword' : [null, Validators.compose([Validators.required])]
    });
    this.otpForm = formBuilder.group({
      'otp' : [null, Validators.required],
    });

    this.searchedFarmerId=localStorage.getItem("id");

  }
  ngOnInit(){

  }

  /* 
  Function to delete farmer's profile by his KKDId
  and make service call to delete farmer's profile from app 
  */

//funtion to send otp to the number
sendOtp(post) {
  this.mobileNo=post.mobileNo;
  this.password=post.currentPassword;
  this.hideVar=true
    //call otp service to generate a otp corresponding to number
    this.registrationService.generateOtp(this.mobileNo).subscribe((res) =>{
      //sucessfully sended
    }, (err) =>{
      //in case of error
    })

  }

//function to verify the otp
verifyOtp(post) {
    //json data to be send to verify otp service
    var otpData={
      'mobileNo':this.mobileNo,
      'otp':post.otp
    }
    //call otp service to verify the otp if true then show update password card
    this.registrationService.verifyOtp(otpData).subscribe((res) =>{
    //response will be true or false if true move else error
    if(res==true){
      let userInfo={
        kkdFarmId:this.searchedFarmerId,
        password:this.password
      };
    //service call to delete farmer's profile
    this.farmerDetailsService.deleteFarmerProfile(userInfo).subscribe((data:boolean)=>{
      if(data==true){
        swal({
          position: 'top',
          type: 'success',
          title: 'Your profile has deleted successfully',
          timer: 1500
        })
        this.router.navigate(['/farmer/login']);
      }
      else{
        swal({
          position: 'top',
          type: 'error',
          title: 'Wrong Password',
          text:'Please Enter Correct Password'
        })
      }
    },(err)=> console.log(err));
  }
  else{
      //if otp entered is wrong
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Wrong OTP!',
        footer: 'Enter Correct OTP......',
      })
    }
  }, (err) =>{
    //in case of error
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Server Down!',
      footer: 'Please Try Later.......',
    })

  })
  }
}