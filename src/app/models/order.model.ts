import {ShippingModel} from "./shipping.model";
import {ProductModel} from "./product.model";

export class OrderModel{
  constructor(public shipping: ShippingModel, public datePlaced: Date, items: ProductModel[], public key?: string){}
}
