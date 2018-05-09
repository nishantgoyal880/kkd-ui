import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CartConfig } from "../config/cart.config";
import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  constructor(private http: Http) {}

  //code to send token in the header
  private authorization() {
    let token = localStorage.getItem("token");
    if (token) {
      let headers = new Headers();
      headers.append("Authorization", token);
      return new RequestOptions({ headers: headers });
    }
  }

  // getting all cartitems on component load
  getCartItems(kkdCustId: string) {
    return this.http
      .get(CartConfig.cartUrl + kkdCustId, this.authorization())
      .map(
        data => data.json(),
        error => {
          console.log(error);
        }
      );
  }

  // deleting a specific item in cart
  deleteCartItem(cartItem) {
    return this.http
      .delete(CartConfig.deleteItem + cartItem.cartItemId, this.authorization())
      .map(data => {}, err => console.log(err));
  }

  // posting order of items present in cart
  postOrder(order) {
    return this.http
      .post(CartConfig.addOrder, order, this.authorization())
      .map(data => {}, err => console.log(err));
  }

  // get customer Info
  getCustomerInfo(kkdCustId: string) {
    return this.http
      .get(CartConfig.customerDetails + kkdCustId, this.authorization())
      .map(
        data => data.json(),
        error => {
          console.log(error);
        }
      );
  }
  // deleting all cart items on successfull order
  deleteAllCartItems(userId) {
    return this.http
      .delete(CartConfig.deleteAllCartItems + userId, this.authorization())
      .map(data => {}, err => console.log(err));
  }
}
