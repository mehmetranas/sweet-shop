import {ItemModel} from "./item.model";

export class CartModel{

  constructor(public key?: string, public date?: string, public items?: ItemModel[]){}

  public getTotalProductsOfItem(){
    let countItemsProduct = 0;
    for(let productId in this.items){
      const item = this.items[productId];
      if(item.quantity){
        countItemsProduct += item.quantity;
      }
    }

    return countItemsProduct;
  }
}
