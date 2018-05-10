import { Component, OnInit, Input } from "@angular/core";
import { CartService } from "../../services/cart.service";
import { IdRoleService } from "./../../../services/id-role/id-role.service";
import { ProductList } from '../../../farmer/config/productList';
import { Router } from "@angular/router";
import swal from "sweetalert2";
@Component({
  selector: "app-customer-my-cart",
  templateUrl: "./customer-my-cart.component.html",
  styleUrls: ["./customer-my-cart.component.css"],
  providers: [CartService]
})
export class CustomerMyCartComponent implements OnInit {
  constructor(
    private idRoleService: IdRoleService,
    private cartService: CartService,
    private router: Router
  ) {}
  public cartItems = ProductList.products;
  public items :Array<any>=[];
  public x: number;
  public customerInfo: object = {};

  public kkdCustId: string;
  // loading cart items on component loading
  ngOnInit() {
      this.cartService.getCustomerInfo(localStorage.getItem("id")).subscribe(
        res => {
          this.customerInfo = res;
        },
        err => console.log(err)
      );
    this.kkdCustId=localStorage.getItem("id");
    this.getCartItems();
  }

  // getting all cart items
  getCartItems() {
    this.cartService.getCartItems(localStorage.getItem("id")).subscribe(
      res => {
        this.items = res;
        console.log(res);
        this.x = this.items.reduce(function(sum, cartItem) {
          return sum + cartItem.productPrice * cartItem.quantity;
        }, 0);
      },
      error => console.log(error)
    );
  }

  // deleting a specific item from cart
  deleteItem(item, ind) {
    this.cartService.deleteCartItem(item).subscribe(
      res => {
        this.getCartItems();
      },
      err => console.log(err)
    );
  }

  // posting order when customer clicks checkout
  checkout() {
    if (this.customerInfo != null) {
      let orders: Array<object> = [];
      let dateOfMonth: string;
      let monthOfYear: string;
      this.items.map(ele => {
        let d = new Date();
        ele["kkdCustId"] = ele.custId;
        ele["kkdFarmId"] = ele.kkdFarmID;
        ele["name"] = ele.productName;
        ele["address"] = this.customerInfo["primaryAddress"];
        ele["mobileNo"] = this.customerInfo["mobileNo"];
        ele["totalAmount"] = ele.quantity * ele.productPrice;
        ele["orderType"] = "Current";
        dateOfMonth = d.getDate() > 9 ? "" + d.getDate() : "0" + d.getDate();
        monthOfYear =
          d.getMonth() > 9 ? "" + (d.getMonth() + 1) : "0" + (d.getMonth() + 1);
        ele["orderPlacingDate"] =
          d.getFullYear() + "-" + monthOfYear + "-" + dateOfMonth;
        orders.push(ele);
      });
      this.cartService.postOrder(orders).subscribe(
        res => {
          this.cartService
            .deleteAllCartItems(this.kkdCustId)
            .subscribe(data => {}, err => console.log(err));
        },
        err => console.log(err)
      );
    } else {
      swal({
        title: "No default address added",
        text: "Add new address",
        type: "warning"
      });
      this.router.navigate(["customer/addressBook/addAddress"]);
    }
  }
}
