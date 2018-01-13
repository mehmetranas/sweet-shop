import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from "@angular/forms";
import {CategoryService} from "../category.service";
import {ProductService} from "../product.service";
import {CustomValidators} from "ng2-validation";
import {ActivatedRoute, Router} from "@angular/router";
import "rxjs/add/operator/take";
import {ProductModel} from "../models/product.model";
import "rxjs/add/operator/map";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  public categories$;
  public product: ProductModel = new ProductModel();
  public productId;
  public form: FormGroup;

  constructor(
    public categoryService: CategoryService,
    public productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) {

    this.categories$ = this.categoryService.getCategories();
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId){
        this.productService.getProduct(this.productId)
          .valueChanges()
          .take(1)
          .subscribe((product) => {
            if(product) this.product = product;
        });
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null,[Validators.required]),
      price: new FormControl(null,[Validators.required, CustomValidators.min(0)]),
      category: new FormControl(null,Validators.required),
      imageUrl: new FormControl(null,[Validators.required, CustomValidators.url])
    })
  }

  public save(){
    if(this.productId)
      this.productService.updateProduct(this.product,this.productId)
        .then(resolve => {
          this.router.navigate(['/admin/products'])
        }).catch(err => console.log(err));
    else
    this.productService.create(this.product)
      .then(resolve => {
        this.form.reset();
        this.router.navigate(
          ['/admin/products']);
        console.log('all good');
      }, reject => {
        console.log('error');
      })
  }

  public delete(){
    this.productService.delete(this.productId)
      .then()
      .catch()
  }
}
