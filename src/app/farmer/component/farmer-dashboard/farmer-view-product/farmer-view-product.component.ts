import { Component, OnInit } from '@angular/core';
import { FarmerViewProductService } from '../../../services/farmer-view-product/farmer-view-product.service'
import { viewProductServiceUrl } from '../../../config/viewProductServiceUrl.config';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { IdRoleService } from '../../../../services/id-role/id-role.service';

@Component({
  selector: 'app-farmer-view-product',
  templateUrl: './farmer-view-product.component.html',
  styleUrls: ['./farmer-view-product.component.css'],
  providers: [FarmerViewProductService]
})
export class FarmerViewProductComponent implements OnInit {

  public role: any;
  public id: any;

  constructor(private farmerViewProductService: FarmerViewProductService, private idRoleService: IdRoleService) {

  }

  public products: any = [];
  public productId: any;
  public kkdFarmId: any;
  public imageUrl: any;
  public description: any;
  public price: any;
  public bulkOrderPrice: any;
  public quantity: any;
  public productName: any;
  public available: any;
  public cities: any = [];
  productSubmission;

  // calling service to get all products of a particular farmer
  public getProducts() {
    console.log("hereeeee");

    this.idRoleService.role.subscribe((role) => {
      this.role = role;
      console.log("role in view product ts: " + this.role);
    })

    this.idRoleService.id.subscribe((id) => {
      this.id = id;
      console.log("id in view product ts: " + this.id);
      this.farmerViewProductService.getAllProducts(this.id).subscribe((res) => {
        this.products = res;
      }, error => this.handleError(error))
    })


  }

  //saving id for deleting a farmer product
  public saveId(id: any) {
    this.productId = id;
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.deleteProduct();
      }
    })
  }

  //calling service to delete farmer product
  public deleteProduct() {
    this.farmerViewProductService.deleteParticularProduct(this.productId).subscribe((res) => {
      this.getProducts();
    }, error => this.handleError(error))
  }

  //showing product details on update product form
  public updateProduct(product: any) {
    this.productId = product.productId;
    this.kkdFarmId = product.kkdFarmId;
    this.imageUrl = product.imageUrl;
    this.productName = product.productName;
    this.description = product.description;
    this.price = product.price;
    this.bulkOrderPrice = product.bulkOrderPrice;
    this.quantity = product.quantity;
    this.available = product.available;
    this.cities = product.cities;
  }

  //creating json data for updating a product
  public updateData() {
    this.productSubmission = {
      "productId": this.productId,
      "kkdFarmId": this.kkdFarmId,
      "imageUrl": this.imageUrl,
      "productName": this.productName,
      "description": this.description,
      "price": this.price,
      "bulkOrderPrice": this.bulkOrderPrice,
      "quantity": this.quantity,
      "available": this.available,
      "cities": this.cities
    }
    // calling service to update farmer product
    this.farmerViewProductService.update(this.productSubmission).subscribe((res) => {
      console.log(res);
      swal({
        position: 'center',
        type: 'success',
        title: 'Your product is successfully updated',
        showConfirmButton: false,
        timer: 1500
      })
      this.getProducts();
    }, (error) => {
      console.log(error);
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  }

  ngOnInit() {


    this.getProducts();
  }

  // Handling errors
  private handleError(error) {
    console.log(error);
  }

}
