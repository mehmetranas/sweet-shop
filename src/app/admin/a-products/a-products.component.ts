import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "../../product.service";
import {Subscription} from "rxjs/Subscription";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-a-products',
  templateUrl: './a-products.component.html',
  styleUrls: ['./a-products.component.css']
})

export class AProductsComponent implements OnInit, OnDestroy {

  public products;
  public filterProducts;
  public loadingIndicator: boolean = true;
  public reorderable: boolean = true;
  public subscribe: Subscription;

  columns = [
    { name: 'Title' },
    { name: 'Price' },
    { name: 'Key' }
  ];
  constructor(public productService: ProductService) {
    this.subscribe = productService.getProducts()
      .snapshotChanges()
      .map((products) => {
        let transformProducts: ProductModel[] = [];
        for(let product of products){
          transformProducts.push(
            {
              key:product.key,
              title:product.payload.val().title,
              price:product.payload.val().price,
              imageUrl:product.payload.val().price,
            }
          )
        }
        return transformProducts;
      })
      .subscribe(products => {
        this.filterProducts = this.products = products;
        this.loadingIndicator = false;
      });
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  ngOnInit() {}

  public delete(key: string){
    this.productService.delete(key)
      .then(resolve => console.log('Success',resolve))
      .catch(err => console.log('Fail',err));
  }

  filter(query){

    this.filterProducts = (query)?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())):
      this.filterProducts = this.products;
  }
}
