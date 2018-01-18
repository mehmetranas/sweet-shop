export class ShippingModel {
  key?: string;
  name: string;
  address1: string;
  address2: string;
  city: string;

  constructor(init?: Partial<ShippingModel>){
    Object.assign(this, init);
  }
}
