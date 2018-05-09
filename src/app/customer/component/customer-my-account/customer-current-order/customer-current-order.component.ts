import { Component, OnInit,Input } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service'
import swal from 'sweetalert2';
import{IdRoleService} from '../../../../services/id-role/id-role.service'
@Component({
  selector: 'app-customer-current-order',
  templateUrl: './customer-current-order.component.html',
  styleUrls: ['./customer-current-order.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerCurrentOrderComponent implements OnInit {
 public customerId : string ;
 public currentOrders : any = [];
  constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { 
   }
  
  ngOnInit() {
    if(IdRoleService.id1.length){
      this.customerId=IdRoleService.id1;
      this.getdata();
    }
    else{
      this.idRoleService.id.subscribe(id=>{
        this.customerId =id;
        this.getdata();
      })
     }
    }
    
  getdata(){
    
    this.customerAuthenticationService.getCurrentOrders(this.customerId).subscribe(results=>{
          
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
    }
  
