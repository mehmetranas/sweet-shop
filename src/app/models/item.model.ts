import {ProductModel} from "./product.model";

export class ItemModel{
  key?:string;
  product?: ProductModel;
  quantity?: number = 0;
}
