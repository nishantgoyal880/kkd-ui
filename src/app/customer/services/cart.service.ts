import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CartConfig } from "../config/cart.config";
import "rxjs/add/operator/map";

@Injectable()
export class CartService {
  constructor(private http: Http) {}

  private headers = new Headers({ "Content-Type": "application/json" });

  //code to send token in the header
  private authorization() {
    let token = localStorage.getItem("token");
    if (token) {
      let headers = new Headers();
      headers.append("Authorization", token);
      return new RequestOptions({ headers: headers });
    }
  }

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

  deleteCartItem(cartItem) {
    return this.http
      .delete(CartConfig.deleteItem + cartItem.cartItemId, this.authorization())
      .map(data => {}, err => console.log(err));
  }

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
  deleteAllCartItems(userId) {
    return this.http
      .delete(CartConfig.deleteAllCartItems + userId, this.authorization())
      .map(data => {}, err => console.log(err));
  }
}
