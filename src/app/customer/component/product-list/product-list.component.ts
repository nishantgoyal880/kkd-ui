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
  public searchInput: string;
  public products: Array<any> = [];
  public max_price: number;
  public max_quantity: number;
  public min_price:number;
  public min_quantity:number;
  public role:string;
  public loggedIn:boolean;
  public userId:string;
  public productsToShowInOnePage:number;

  constructor(private searchService: SearchService, private idRoleService: IdRoleService) {
    this.productsToShowInOnePage=SearchConfig.productsToShowInOnePage;
    this.idRoleService.role.subscribe((role) =>{
      this.role=role;
   })
   this.idRoleService.id.subscribe((id) =>{
     this.userId=id;
   })
   this.idRoleService.isLoggedIn.subscribe((loggedIn) =>{
    this.loggedIn=loggedIn;
  })
  }

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
          product => product.quantity >= event.from && product.quantity <= event.to
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
      custId: this.userId,
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
