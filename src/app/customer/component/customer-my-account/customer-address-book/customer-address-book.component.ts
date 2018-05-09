import { Component, OnInit } from '@angular/core';
import { CustomerAuthenticationService } from '../../../services/customer-authentication.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service'

@Component({
  selector: 'app-customer-address-book',
  templateUrl: './customer-address-book.component.html',
  styleUrls: ['./customer-address-book.component.css'],
  providers: [CustomerAuthenticationService],
})
export class CustomerAddressBookComponent implements OnInit {
  details: Array<any> = [];
  customerId: string = "";
  constructor(private customerAuthenticationService: CustomerAuthenticationService, private idRoleService: IdRoleService) { }

  ngOnInit() {
  
      this.customerId = localStorage.getItem("id");
      this.searchDetails();
    
  }
  /* 
  Function to display customer's address by his KKDId and 
  make service call to display customer's address from UserDetails
  */
  searchDetails() {
    return this.customerAuthenticationService.getDetails(this.customerId).subscribe(
      data =>{
      if(data!==null)
      {this.details = data.addresses}}
      ,
      error => console.log(error)
    )
  }
}
