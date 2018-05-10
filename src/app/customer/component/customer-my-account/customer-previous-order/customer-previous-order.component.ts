import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
import swal from 'sweetalert2';
import{IdRoleService} from '../../../../services/id-role/id-role.service'
import { ProductList } from '../../../../farmer/config/productList';

@Component({
  selector: 'app-customer-previous-order',
  templateUrl: './customer-previous-order.component.html',
  styleUrls: ['./customer-previous-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerPreviousOrderComponent implements OnInit {

  public p:any;
  public customerId : string ;
  public previousOrders : any = [];
  items = ProductList.products;
  constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { }

  ngOnInit() {
   //getting customer id of the actively logged in customer
      this.customerId=localStorage.getItem("id");
      this.getdata();
   }

  //function to retreive the previous orders of the customer
   getdata(){
  //calling the service to retreive the previous orders
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
   }
