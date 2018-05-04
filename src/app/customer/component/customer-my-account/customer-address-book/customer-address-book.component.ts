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
  customerId:string="KKDCUST2000";
  constructor(private customerAuthenticationService : CustomerAuthenticationService,private idRoleService : IdRoleService) { }
searchDetails(){
  return this.customerAuthenticationService.getDetails(this.customerId).subscribe(
    data => this.details=data.addresses,
    error=> console.log(error)
  )
}
  
  ngOnInit() {
    //this.customerAuthenticationService.changeCustomerId("KKDCUST2002");
    //this.customerId=CustomerAuthenticationService.cus;
    // this.idRoleService.id.subscribe(id=>{
    //   this.customerId =id;
    //   this.searchDetails();
    // })
    this.searchDetails();
    
  }

}
