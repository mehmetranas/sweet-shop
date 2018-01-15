import {Component, Input} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModel} from "../models/cart.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: ProductModel = new ProductModel();
  @Input('show-action') showAction: boolean = false;
  @Input('shopping-cart') shoppingCart: CartModel;

  constructor(private shoppingCartService: ShoppingCartService) { }

  public addToCart() {
       this.shoppingCartService.setQuantity(this.product, 1)
        .then((resove) => console.log('Success'),
        (reject) => console.log('An error occurred', reject));
  }
}
