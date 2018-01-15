import {ItemModel} from "./item.model";

export class CartModel{
  public itemModels: ItemModel[] = [];
  public key?: string;
  public date?: string;
  public items?: { [productId: string]: any};

  constructor(init?: Partial<CartModel>){
    Object.assign(this, init);
    for(let productId in this.items){
      let item = this.items[productId];
    this.itemModels.push(new ItemModel({...item}));
    }
  }

  get getTotalProductsOfItem(){
    let countItemsProduct = 0;
    for(let productId in this.itemModels){
      const item = this.itemModels[productId];
      if(item.quantity){
        countItemsProduct += item.quantity;
      }
    }
    return countItemsProduct;
  }

  public quantity(productId){
    if(!this.items || !this.items[productId]) return 0;
    return this.items[productId].quantity;
  }

  get totalCartPrice(){
    let result = 0;
    for(let item of this.itemModels){
      result += item.totalPrice;
    }
    return result;
  }
}
