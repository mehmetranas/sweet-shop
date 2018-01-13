import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {CartModel} from "./models/cart.model";

@Injectable()
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) { }

  public async getCart(){
    const cartId = await this.createOrGetCardId();
    return this.db.object<CartModel>('/shopping-carts/' + cartId).valueChanges();
  }

  private getItem(cartId, productId){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }

  private create(){
    return this.db.list('/shopping-carts').push({
      date:new Date().getTime()
    })
  }

  private async createOrGetCardId(){
    const cartId = localStorage.getItem('shoppingId');
    if(!cartId) {
      const result = await this.create();
      localStorage.setItem('shoppingId', result.key);
      return result.key;
    }
    return cartId;
  }

  public async addToCart(product){
    const cartId = await this.createOrGetCardId();
    const item = this.getItem(cartId, product.key);
    item.snapshotChanges()
      .take(1)
      .subscribe(value =>
        item.update({product: product, quantity: (value.payload.exists()? value.payload.val().quantity: 0) + 1})
      );
  }
}
