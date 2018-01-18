import {Component, Input, OnInit} from "@angular/core";
import {ProductModel} from "../../models/product.model";
import {CartModel} from "../../models/cart.model";
import {ShoppingCartService} from "../../services/shopping-cart.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {

  @Input('product') product;
  @Input('shopping-cart') shoppingCart: CartModel;

  constructor(private shoppingCartService: ShoppingCartService) { }

  public setQuantity(value: number) {
    this.shoppingCartService.setQuantity(this.product, value);
  }

}
