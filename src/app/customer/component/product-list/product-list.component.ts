import { Component, OnInit } from "@angular/core";
import { SearchService } from "../../services/search.service";
import { IdRoleService } from '../../../services/id-role/id-role.service'
import { SearchConfig } from '../../config/search.config'
import swal from 'sweetalert2'
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
  providers: [SearchService]
})
export class ProductListComponent implements OnInit {
  public searchTextDisplay:string;
  public searchInput: string;
  public products: Array<any> = [];
  public max_price: number;
  public max_quantity: number;
  public max_price_slider: number;
  public max_quantity_slider: number;
  public min_price:number=0;
  public min_quantity:number=0;
  public role:string;
  public loggedIn:boolean;
  public userId:string;
  public productsToShowInOnePage:number;
  public cartItem = {};
  public enteredQuant: number;
  public p:number;
  public lastpage:string;

  constructor(private searchService: SearchService, private idRoleService: IdRoleService) {
    this.productsToShowInOnePage=SearchConfig.productsToShowInOnePage;
    this.p=1;
  }

  // loading products on component loading
  ngOnInit() {
    this.loggedIn=false;
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data;
        this.calculatingMax();
        this.lastpage=Math.ceil(this.products.length/this.productsToShowInOnePage)+'';
      },
      err => console.log(err)
    );
    this.userId=localStorage.getItem("id");
    if(this.userId){
      if(this.userId.search("CUST")){
        this.role="Customer";
        this.loggedIn=true;
      }
      
    }
  }

  // calculating maximum price and quantity
  calculatingMax() {
    if (this.products.length != 0) {
      this.max_price = this.products.reduce(
        (prev, current) => (prev.price > current.price ? prev : current)
      ).price;
      this.max_quantity = this.products.reduce(
        (prev, current) => (prev.quantity > current.quantity ? prev : current)
      ).quantity;
      this.max_price_slider=this.max_price;
      this.max_quantity_slider=this.max_quantity;
    }
  }
  sorters = {
    byPrice: function(firstProduct, secondProduct) {
      return firstProduct.price - secondProduct.price;
    },
    byQuantity: function(firstProduct, secondProduct) {
      return firstProduct.quantity - secondProduct.quantity;
    }
  };

  // sort products by specific criteria
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
    }
  }

  // search products on basis on search input
  searchProduct() {
    this.searchTextDisplay=this.searchInput;
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data;
        this.calculatingMax();
        this.lastpage=Math.ceil(this.products.length/this.productsToShowInOnePage)+'';
      },
      err => {
        console.log(err), (this.products = []);
      }
    );
  }
  // event triggered on changing price slider
  myOnFinishPrice(event) {
    this.min_price=event.from;
    this.max_price=event.to;
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data.filter(
          product => product.price >= event.from && product.price <= event.to&&product.quantity >= this.min_quantity && product.price <= this.max_quantity
        );
        this.lastpage=Math.ceil(this.products.length/this.productsToShowInOnePage)+'';
      },
      err => console.log(err)
    );
  }
  // event triggered on changing quantity filter
  myOnFinishQuantity(event) {
    this.min_quantity=event.from;
    this.max_quantity=event.to;
    this.searchService.getAllProducts(this.searchInput).subscribe(
      data => {
        this.products = data.filter(
          product => product.quantity >= event.from && product.quantity <= event.to && product.price >= this.min_price && product.price <= this.max_price
        );
        this.lastpage=Math.ceil(this.products.length/this.productsToShowInOnePage)+'';
      },
      err => console.log(err)
    );
  }
  // initializing item to be added to cart and ask for quantity
  addToCart(item) {
    this.cartItem = {
      productId: item.productId,
      custId: this.userId,
      kkdFarmID: item.kkdFarmId,
      productName: item.productName,
      productPrice: item.price,
      farmerName: "Ram Singh",
      quantity: item.quantity,
      avgRating: 4.5
    };
  }

  // adding product to cart and ask for quantity
  proceed() {
    if (this.cartItem["quantity"] > this.enteredQuant) {
      this.cartItem["quantity"] = this.enteredQuant;
      this.searchService.addToCart(this.cartItem).subscribe(
        data => {
          swal(
            'Thank you!',
            'Items added to cart!',
            'success'
          )
        },
        err => console.log(err)
      );
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'We do not have that much stocks right now!'
      })
    }
  }
}
