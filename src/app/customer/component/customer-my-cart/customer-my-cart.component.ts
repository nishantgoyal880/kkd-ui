import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { Router } from "@angular/router";
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
      this.items.map(ele => {
        let d = new Date();
        ele["kkdCustId"] = ele.custId;
        ele["kkdFarmId"] = ele.kkdFarmID;
        ele["name"] = ele.productName;
        ele["address"] = this.customerInfo["primaryAddress"];
        ele["mobileNo"] = this.customerInfo["mobileNo"];
        ele["totalAmount"] = ele.quantity * ele.productPrice;
        ele["orderType"] = "Current";
        ele["orderPlacingDate"] =
          d.getFullYear() + "-0" + (d.getMonth() + 1) + "-" + d.getDate();
        orders.push(ele);
      });
      this.cartService
        .postOrder(orders)
        .subscribe(
          res => {},
          err => console.log(err)
        );
    } else {
      alert("Add Address First");
      this.router.navigate(["/customer/myAccount"]);
    }
  }
}
