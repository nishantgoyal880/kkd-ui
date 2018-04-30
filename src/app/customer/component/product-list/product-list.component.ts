import { Component, OnInit } from "@angular/core";
import { SearchService } from "../../services/search.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [SearchService]
})
export class ProductListComponent implements OnInit {
  public searchInput: string;
  public products: Array<any> = [];
  public max_price: number;
  public max_quantity: number;

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data;
        this.calculatingMax();
      },
      err => console.log(err)
    );
  }

  calculatingMax() {
    if (this.products.length != 0) {
      this.max_price = this.products.reduce(
        (prev, current) => (prev.price > current.price ? prev : current)
      ).price;
      this.max_quantity = this.products.reduce(
        (prev, current) => (prev.quantity > current.quantity ? prev : current)
      ).quantity;
    }
  }
  sorters = {
    byPrice: function(firstProduct, secondProduct) {
      return firstProduct.price - secondProduct.price;
    },
    byQuantity: function(firstProduct, secondProduct) {
      return firstProduct.quantity - secondProduct.quantity;
    },
    byDistance: function(firstProduct, secondProduct) {
      return firstProduct.distance - secondProduct.distance;
    },
    byPopularity: function(firstProduct, secondProduct) {
      // in reverse order by default
      return secondProduct.avgRating - firstProduct.avgRating;
    }
  };

  sortBy(x) {
    switch (x) {
      case "priceLH":
        this.products.sort(this.sorters.byPrice);
        break;

      case "priceHL":
        this.products.sort(this.sorters.byPrice);
        this.products.reverse();
        break;

      case "quantityLH":
        this.products.sort(this.sorters.byQuantity);
        break;

      case "quantityHL":
        this.products.sort(this.sorters.byQuantity);
        this.products.reverse();
        break;

      case "distance":
        this.products.sort(this.sorters.byDistance);
        break;

      case "popularity":
        this.products.sort(this.sorters.byPopularity);
        this.products.reverse();
        break;
    }
  }

  searchProduct() {
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data;
        this.calculatingMax();
      },
      err => {
        console.log(err), (this.products = []);
      }
    );
  }
  myOnFinishPrice(event) {
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data.filter(
          product => product.price >= event.from && product.price <= event.to
        );
      },
      err => console.log(err)
    );
  }
  myOnFinishQuantity(event) {
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data.filter(
          product => product.price >= event.from && product.price <= event.to
        );
      },
      err => console.log(err)
    );
  }
  public cartItem = {};
  public enteredQuant: number;
  addToCart(item) {
    this.cartItem = {
      productId: item.productId,
      custId: "KKDCUST1000",
      kkdFarmID: item.kkdFarmId,
      productName: item.productName,
      productPrice: item.price,
      farmerName: "Ram Singh",
      quantity: item.quantity,
      avgRating: 4.5
    };
  }

  proceed() {
    if (this.cartItem["quantity"] > this.enteredQuant) {
      this.cartItem["quantity"] = this.enteredQuant;
      this.searchService.addToCart(this.cartItem).subscribe(
        data => {
          alert("added to bag");
        },
        err => console.log(err)
      );
    } else {
      alert("No stocks Available for this much Qunatity");
    }
  }
}
