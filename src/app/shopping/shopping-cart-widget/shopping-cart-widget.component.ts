import {Component, Input, OnInit} from "@angular/core";
import {CartModel} from "shared/models/cart.model";

@Component({
  selector: 'app-shopping-cart-widget',
  templateUrl: './shopping-cart-widget.component.html',
  styleUrls: ['./shopping-cart-widget.component.css']
})
export class ShoppingCartWidgetComponent implements OnInit {
  @Input('shopping-cart') shoppingCart: CartModel = new CartModel();

  constructor() { }

  ngOnInit() {}

}
