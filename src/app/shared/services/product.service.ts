import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

import {ProductModel} from "shared/models/product.model";

@Injectable()
export class ProductService {

  constructor(private db: AngularFireDatabase ) {

  }

  public create(product){
    return this.db.list('/products').push(product);
  }

  public getProducts(){
    return this.db.list<ProductModel>('/products');
  }

  public getProduct(id: string) {
    return this.db.object<ProductModel | null>('/products/' + id).valueChanges();
  }


  public updateProduct(product,productKey){
    return this.db.object('products/' + productKey).update(product);
  }

  public delete(key: string) {
    return this.db.object('/products/' + key).remove();
  }

}
