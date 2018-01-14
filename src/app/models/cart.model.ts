import {ItemModel} from "./item.model";

export class CartModel{
  public items: ItemModel[] = [];

  constructor(public key?: string, public date?: string, public itemsMap?: { [productId: string]: any}){
    for(let productId in itemsMap){
      let item = itemsMap[productId];
    this.items.push(new ItemModel(item.key,item.product,item.quantity));
    }
  }

  get getTotalProductsOfItem(){
    let countItemsProduct = 0;
    for(let productId in this.items){
      const item = this.items[productId];
      if(item.quantity){
        countItemsProduct += item.quantity;
      }
    }
    return countItemsProduct;
  }

  public quantity(productId){
    return this.itemsMap[productId]? this.itemsMap[productId].quantity : 0;
  }

  get totalCartPrice(){
    let result = 0;
    for(let item of this.items){
      result += item.totalPrice;
    }
    return result;
  }
}
