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

  getAllProducts(searchQuery: string) {
    let url: string;
    if (searchQuery != undefined) {
      url = SearchConfig.searchSpecificProducts + searchQuery;
    } else {
      url = SearchConfig.searchProducts;
    }
    return this.http.get(url).map(data => data.json(), err => console.log(err));
  }

  addToCart(cartItem) {
    return this.http
      .post(CartConfig.addToCart, cartItem, { headers: this.headers })
      .map(
        data => {},
        err => err.json()
      );
  }
}
