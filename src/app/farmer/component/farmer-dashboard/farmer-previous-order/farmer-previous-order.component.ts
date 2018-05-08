import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order-service/order.service';
import { IdRoleService } from '../../../../services/id-role/id-role.service';

@Component({
  selector: 'app-farmer-previous-order',
  templateUrl: './farmer-previous-order.component.html',
  styleUrls: ['./farmer-previous-order.component.css'],
  providers:[OrderService]
})

export class FarmerPreviousOrderComponent implements OnInit {

  constructor(private orderService:OrderService,private idRoleService:IdRoleService) { }

  public orderList=[];
  public farmerId:any;
  public p:any;

  ngOnInit() {


       //code to get the list of orders according to farmer id
       this.orderService.getPreviousOrderListFromFarmerId(localStorage.getItem("id")).subscribe((res) =>{
         this.orderList = res;
       }, (error) =>{})

}
}
