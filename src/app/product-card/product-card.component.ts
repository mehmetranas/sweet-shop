import {Component, Input, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModel} from "../models/cart.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModel = new ProductModel();
  @Input('show-action') showAction: boolean = false;
  @Input('shopping-cart') shoppingCart: CartModel;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public addToCart() {
      this.shoppingCartService.setQuantity(this.product, 1)
        .then((resove) => console.log('Success'),
        (reject) => console.log('An error occurred', reject));
  }

  public getQuantity(){
    if(!this.shoppingCart || !this.shoppingCart.itemsMap) return 0;
      return this.shoppingCart.itemsMap[this.product.key]? this.shoppingCart.itemsMap[this.product.key].quantity : 0;
  }

  public setQuantity(value: number) {
    this.shoppingCartService.setQuantity(this.product, value);
  }
}
