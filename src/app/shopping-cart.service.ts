import {EventEmitter, Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {CartModel} from "./models/cart.model";
import {ProductModel} from "./models/product.model";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ShoppingCartService {
  public sendCart: EventEmitter<Observable<CartModel>> = new EventEmitter<Observable<CartModel>>();
  constructor(private db: AngularFireDatabase) { }

  public async getCart(){
    const cartId = await this.createOrGetCardId();
    return this.db.object<CartModel>('/shopping-carts/' + cartId)
      .valueChanges()
      .map((result) => new CartModel({...result}))
  }

  public async setQuantity(product: ProductModel, change: number) {
    const cartId = await this.createOrGetCardId();


    const item = this.getItem(cartId, product.key);
    item.snapshotChanges()
      .take(1)
      .subscribe(value => {
        let quantity = (value.payload.exists() ? value.payload.val().quantity : 0) + change;
        if(quantity === 0) item.remove();
        else
        item.update({...product, quantity: (value.payload.exists() ? value.payload.val().quantity : 0) + change});

      });
  }

  public async clearAllItems(){
    const cartId = await this.createOrGetCardId();
   return this.db.object('/shopping-carts/' + cartId + '/items').remove();
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

}
