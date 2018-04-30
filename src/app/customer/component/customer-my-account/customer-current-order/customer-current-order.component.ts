import { Component, OnInit,Input } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
import swal from 'sweetalert2';

@Component({
  selector: 'app-customer-current-order',
  templateUrl: './customer-current-order.component.html',
  styleUrls: ['./customer-current-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerCurrentOrderComponent implements OnInit {
 public customerId : string ;
 public currentOrders : any = [];
  constructor(private customerAuthenticationService : CustomerAuthenticationService) { }

  getdata(){
  this.customerAuthenticationService.getCurrentOrders(this.customerId).subscribe(results=>{
    console.log(results)
    if(results == null){
      swal({
        type: 'error',
        title: 'No current orders',
        text: 'Currently there are no orders',
      })
     }
  this.currentOrders=results;
  },error=> {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  });
}
  
ngOnInit() {
    this.customerAuthenticationService.changeCustomerId("kkdcust3001");
    this.customerId = CustomerAuthenticationService.cus;
    this.getdata();
   }}
