import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {CartConfig} from '../config/cart.config'
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

  constructor(private http:Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json'});

  getCartItems(kkdCustId:string){
   return this.http.get(CartConfig.cartUrl+kkdCustId).
    map(data=>
      data.json(),
    error=> {
      console.log(error);
    });
  }

deleteCartItem(cartItem){
  return this.http.delete(CartConfig.deleteItem+cartItem.cartItemId,{headers: this.headers}).
  map(
    data=> console.log("deleting"),
    err=> console.log(err)
  );
}

postOrder(order){
  return this.http.post(CartConfig.addOrder,order,{headers: this.headers}).
  map(
    (data)=> console.log(data),
    (err)=> console.log(err)
  );
}

updateProducts(product){
  return this.http.put(CartConfig.updateProuct,product,{headers: this.headers}).
  map((data)=>data.json(),
  (err)=> console.log("hi"+err)
)
}
// get customer Info
getCustomerInfo(kkdCustId:string){
  return this.http.get(CartConfig.customerDetails+kkdCustId).
   map(data=>
     data.json(),
   error=> {
     console.log(error);
   });
 }

}
