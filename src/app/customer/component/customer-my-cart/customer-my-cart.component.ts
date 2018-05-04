import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";
import swal from 'sweetalert2'
@Component({
  selector: "app-customer-my-cart",
  templateUrl: "./customer-my-cart.component.html",
  styleUrls: ["./customer-my-cart.component.css"],
  providers: [CartService]
})
export class CustomerMyCartComponent implements OnInit {
  constructor(private cartService: CartService, private router: Router) {}
  public items = [];
  public x: number;
  public customerInfo: object = {};

  @Input() kkdCustId: string;
  ngOnInit() {
    this.kkdCustId = "KKDCUST2000";
    this.cartService.getCustomerInfo(this.kkdCustId).subscribe(
      res => {
        this.customerInfo = res;
      },
      err => console.log(err)
    );
    this.getCartItems();
  }

  getCartItems() {
    this.kkdCustId = "KKDCUST1000";
    this.cartService.getCartItems(this.kkdCustId).subscribe(
      res => {
        this.items = res;
        this.x = this.items.reduce(function(sum, cartItem) {
          return sum + cartItem.productPrice * cartItem.quantity;
        }, 0);
      },
      error => console.log(error)
    );
  }

  deleteItem(item, ind) {
    this.cartService.deleteCartItem(item).subscribe(
      res => {
        this.getCartItems();
      },
      err => console.log(err)
    );
  }

  checkout() {
    if (this.customerInfo != null) {
      let orders: Array<object> = [];
      let dateOfMonth:string;
      let monthOfYear:string;
      this.items.map(ele => {
        let d = new Date();
        ele["kkdCustId"] = ele.custId;
        ele["kkdFarmId"] = ele.kkdFarmID;
        ele["name"] = ele.productName;
        ele["address"] = this.customerInfo["primaryAddress"];
        ele["mobileNo"] = this.customerInfo["mobileNo"];
        ele["totalAmount"] = ele.quantity * ele.productPrice;
        ele["orderType"] = "Current";
        dateOfMonth=d.getDate()>9?''+(d.getDate()):'0'+(d.getDate());
        monthOfYear=d.getMonth()>9?''+(d.getMonth()+1):'0'+(d.getMonth()+1);
        ele["orderPlacingDate"] =d.getFullYear()+'-'+monthOfYear+'-'+dateOfMonth;
        orders.push(ele);
      });
      this.cartService
        .postOrder(orders)
        .subscribe(
          res => {
            this.cartService.deleteAllCartItems(this.kkdCustId).subscribe((data)=>{},err=> console.log(err));
          },
          err => console.log(err)
        );
    } else {
      swal({
        title: 'No default address added',
        text: "Add new address",
        type: 'warning'});
      this.router.navigate(["customer/addressBook/addAddress"]);
    }
  }
}
