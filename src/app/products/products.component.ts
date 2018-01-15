import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../models/product.model";
import {CartModel} from "../models/cart.model";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products = [];
  public filteredProducts = [];
  private subscribes: Subscription[] = [];
  private query: string;
  public shoppingCart: CartModel;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: ShoppingCartService){

   let subscribePr = productService.getProducts()
      .snapshotChanges()
      .map( (products) => {
        let transformedProducts: ProductModel[] = [];
        for(let p of products) {
          transformedProducts.push({
            imageUrl: p.payload.val().imageUrl,
            title: p.payload.val().title,
            price: p.payload.val().price,
            category: p.payload.val().category,
            key: p.key
          });
          }
          return transformedProducts;
        })
      .subscribe((products) => {
        this.products = products;
        this.filter()});
    this.subscribes.push(subscribePr);
  }

  async ngOnInit() {
    const subscribeSC = (await this.cartService.getCart()).subscribe((cart) => this.shoppingCart = cart);
    this.subscribes.push(subscribeSC);
  }

  ngOnDestroy() {
    for(let sub of this.subscribes){
      sub.unsubscribe();
    }
  }

  filter() {
    let subscribeQp = this.route.queryParamMap.subscribe(qp => {
      this.query = qp.get('category');
      this.filteredProducts = (this.query)?
      this.products
        .filter(p =>
          p.category.toLowerCase() == this.query.toLowerCase()):
        this.products;
    });
    this.subscribes.push(subscribeQp);
  }
}
