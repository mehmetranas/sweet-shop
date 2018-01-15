import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModel} from "../models/cart.model";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css']
})
export class ShoppingCardComponent implements OnInit {
  public cart$: Observable<CartModel>;

  constructor(private shoppingCartService: ShoppingCartService, private router: Router) { }

  public async ngOnInit() {
   this.cart$ = await this.shoppingCartService.getCart();
  }

  public clearAllItems() {
    console.log('in method');
    this.shoppingCartService.clearAllItems()
      .then((resolve) => {
          console.log('Successfully removed');
        },
          (reject) => console.log('An error occurred', reject)
      })
  }
}
