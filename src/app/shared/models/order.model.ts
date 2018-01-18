import {ShippingModel} from "shared/models/shipping.model";
import {ItemModel} from "shared/models/item.model";

export class OrderModel{
  datePlaced: number;

  constructor(public shipping: ShippingModel,
              public items: ItemModel[],
              public userId: string){
    this.datePlaced = new Date().getTime()
  }
}
