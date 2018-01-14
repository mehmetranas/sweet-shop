import {ProductModel} from "./product.model";

export class ItemModel{

  constructor(public key: string, public product: ProductModel, public quantity: number) {}

  get totalPrice(){
    return this.quantity * this.product.price;
  }
}
