import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { SearchConfig } from "../config/search.config";
import { CartConfig } from "../config/cart.config";
@Injectable()
export class SearchService {
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

  // getting list of all the products according to location
  getAllProducts(searchQuery: string) {
    let url: string;
    if(searchQuery==undefined||searchQuery==""){
      url = SearchConfig.searchProducts;;
    }
    else{
      let location:any=localStorage.getItem("user-location")?localStorage.getItem("user-location").toLowerCase():"gurgaon";
      url = SearchConfig.searchSpecificProducts +location+"/"+ searchQuery;
    }
   
    return this.http.get(url,this.authorization()).map(data => data.json(), err => console.log(err));
  }

  // adding product to cart
  addToCart(cartItem) {
    return this.http
      .post(CartConfig.addToCart, cartItem, this.authorization())
      .map(
        data => {},
        err => err.json()
      );
  }
}
