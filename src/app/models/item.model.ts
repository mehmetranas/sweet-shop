
export class ItemModel{

  public key: string;
  public imageUrl: string;
  public category: string;
  public price: number;
  public quantity: number;

  constructor(init: Partial<ItemModel>) {
    Object.assign(this, init);
  }

  get totalPrice(){
    return this.quantity * this.price;
  }
}
