import {Component, Input, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {CartModel} from "../models/cart.model";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input() product: ProductModel = new ProductModel();
  @Input('shopping-cart') shoppingCart: CartModel;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public addToCart() {
    this.shoppingCartService.setQuantity(this.product, 1)
      .then((resove) => console.log('Success'),
        (reject) => console.log('An error occurred', reject));
  }

  public setQuantity(value: number) {
    this.shoppingCartService.setQuantity(this.product, value);
  }

}
