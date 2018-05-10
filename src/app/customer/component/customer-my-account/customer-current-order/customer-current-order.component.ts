import { Component, OnInit,Input } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
import swal from 'sweetalert2';
import{IdRoleService} from '../../../../services/id-role/id-role.service'
import { ProductList } from '../../../../farmer/config/productList';

@Component({
  selector: 'app-customer-current-order',
  templateUrl: './customer-current-order.component.html',
  styleUrls: ['./customer-current-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerCurrentOrderComponent implements OnInit {
 public customerId : string ;
 public currentOrders : any = [];
 public p:any;
  constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { 
  }
  items = ProductList.products;

  ngOnInit() {
//getting customer id of the actively logged in customer
      this.customerId=localStorage.getItem("id");
      this.getdata();
   }
    
  //function to retreive the current orders of the customer
    getdata(){
     //calling the service to retreive the current orders 
    this.customerAuthenticationService.getCurrentOrders(this.customerId).subscribe(results=>{
          if(results == null){
            swal({
              type: 'error',
              title: 'No current orders',
              text: 'Currently there are no orders',
            })
           }
           console.log(results)
    this.currentOrders=results;
        },error=> {
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        });
        }
    }
  
