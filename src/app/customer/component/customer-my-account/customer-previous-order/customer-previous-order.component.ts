import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
import swal from 'sweetalert2';
import{IdRoleService} from '../../../../services/id-role/id-role.service'

@Component({
  selector: 'app-customer-previous-order',
  templateUrl: './customer-previous-order.component.html',
  styleUrls: ['./customer-previous-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerPreviousOrderComponent implements OnInit {

  public customerId : string ;
  public previousOrders : any = [];
   constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { }

   getdata(){
   this.customerAuthenticationService.getPreviousOrders(this.customerId).subscribe(results=>{
     if(results == null){
      swal({
        type: 'error',
        title: 'No previous orders',
        text: 'No previous orders available to show',
      })
     }
   this.previousOrders=results;
   },error=> {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  });
 }
   ngOnInit() {
    this.idRoleService.id.subscribe(id=>{
      this.customerId =id;
      this.getdata();
    })
   
    //this.customerAuthenticationService.changeCustomerId("kkdcust3001");

    //this.customerId = CustomerAuthenticationService.cus;
     

   }}
