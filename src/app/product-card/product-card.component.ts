import {Component, Input, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModel = new ProductModel();
  @Input('show-action') showAction: boolean = false;

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  public addToCart() {
    const shoppingId = localStorage.getItem('shoppingId');
    if(!shoppingId) {
      this.shoppingCartService.create()
        .then((resolve) => {
          console.log('Success created cart');
          localStorage.setItem('shoppingId', resolve.key);
          // add product
        },
          (reject) => console.log('An error occurred', reject));
    }else {
      // add product
    }
  }
}
