import { Component, OnInit } from '@angular/core';
import {CustomerAuthenticationService} from '../../../services/customer-authentication.service';
import{IdRoleService} from '../../../../services/id-role/id-role.service'

@Component({
  selector: 'app-customer-address-book',
  templateUrl: './customer-address-book.component.html',
  styleUrls: ['./customer-address-book.component.css'],
  providers:[CustomerAuthenticationService],
})
export class CustomerAddressBookComponent implements OnInit {
  details:Array<any>=[];
  customerId:string="";
  constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { }

ngOnInit() {
    if(IdRoleService.id1.length){
      this.customerId=IdRoleService.id1;
      alert(this.customerId );
      this.searchDetails();
    }
    else{
      this.idRoleService.id.subscribe(id=>{
        this.customerId =id;
      alert(this.customerId );
      this.searchDetails();
      })
     }
    
  }
searchDetails(){
    return this.customerAuthenticationService.getDetails(this.customerId).subscribe(
    data => this.details=data.addresses,
    error=> console.log(error)
  )
}
  
  
}
