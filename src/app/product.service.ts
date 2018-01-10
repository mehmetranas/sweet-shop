import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {ProductModel} from "./models/product.model";

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase ) {

  }

  public create(product){
    return this.db.list('/products').push(product);
  }

  public getProducts(){
    return this.db.list<ProductModel>('/products').valueChanges();
  }

  getProduct(id: string) {
    return this.db.object<ProductModel | null>('/products/' + id);
  }

  updateProduct(product,productKey){
    return this.db.object('products/' + productKey).update(product);
  }

  delete(key: string) {
    return this.db.object('/products/' + key).remove();
  }

  public getProductsWithKeys() {
    return this.db.list<ProductModel>('/products').snapshotChanges();
  }
}
