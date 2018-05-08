import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IdRoleService } from '../../../../services/id-role/id-role.service';
import swal from 'sweetalert2';
import { FarmerAddProductService } from '../../../services/farmer-add-product/farmer-add-product.service';
import { ProductList } from '../../../config/productList';

@Component({
  selector: 'app-farmer-add-product',
  templateUrl: './farmer-add-product.component.html',
  styleUrls: ['./farmer-add-product.component.css'],
  providers: [ FarmerAddProductService ]
})
export class FarmerAddProductComponent implements OnInit {

  items = ProductList.products;
  rForm: FormGroup;
  post:any;
  public kkdFarmId: any="";
  public role:string;
  public imageUrl:any;
  public description: any;
  public price: any;
  public bulkOrderPrice: any;
  public quantity: any;
  public productName: any;
  public available: any;
  productSubmission;

  ngOnInit() {
    //assign role and farmer id
    this.idRoleService.role.subscribe((role) =>{
      this.role=role;
      console.log(this.role)
      })
      this.idRoleService.id.subscribe((id) =>{
        console.log(id+"id in add product");
        
        this.kkdFarmId=id;
        console.log("id"+this.kkdFarmId);
      })      
  }
 

  constructor(private productService: FarmerAddProductService,
    private fb: FormBuilder, 
    public router: Router,
    private idRoleService: IdRoleService) { 
    this.rForm = fb.group({
      description : [null, Validators.compose([Validators.required])],
      price : [null, Validators.compose([Validators.required])],
      bulkOrderPrice : [null, Validators.compose([Validators.required])],
      quantity : [null, Validators.compose([Validators.required])],
      available : ''
      })
      
    }


  //function to select product name
  selectChangeHandler (event: any){
    this.productName=event.target.value;
  }

  //function to upload image
  onFileSelected(event: any){
    console.log(event);
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.imageUrl = event.target.result 
        }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  //function to add product
  addProduct(post){
    console.log(this.kkdFarmId+"@@@@@@@@@@@@@@@@@@@@@@@@@@@")
    this.productSubmission = {

    "kkdFarmId":this.kkdFarmId,
    "description":post.description,
    "price":post.price,
    "bulkOrderPrice":post.bulkOrderPrice,
    "quantity":post.quantity,
    "productName":this.productName,
    "available":post.available,
    "imageUrl":this.imageUrl,
    }
    console.log(this.productSubmission)

    if(post.bulkOrderPrice<=post.price){
    this.productService.update(this.kkdFarmId,this.productSubmission).subscribe((res) => {
      console.log(res);
      swal({
        position: 'center',
        type: 'success',
        title: 'Your product has been added',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigate(['farmer/viewProduct']);

    },(error) => {
      console.log(error)
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  }
  else{
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Bulk Order Price should be less than Product Price',
    })
  }
  }
}
