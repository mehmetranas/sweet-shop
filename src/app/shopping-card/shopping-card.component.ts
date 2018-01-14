import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModel} from "../models/cart.model";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  public cart$: Observable<CartModel>;

  constructor(private shoppingCartService: ShoppingCartService) { }

  public async ngOnInit() {
   this.cart$ = await this.shoppingCartService.getCart();
  }
}
