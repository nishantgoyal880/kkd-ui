import { Component, OnInit,Input } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
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
  this.currentOrders=results;
  },error=> {
    console.log(error);
  });
}
  
ngOnInit() {
    this.customerAuthenticationService.changeCustomerId("kkdcust3001");
    this.customerId = CustomerAuthenticationService.cus;
    this.getdata();
   }}
