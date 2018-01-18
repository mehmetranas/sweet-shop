import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

import {OrderModel} from "shared/models/order.model";

@Injectable()
export class OrderService {

  constructor(private db:AngularFireDatabase) {}

  public create(order: OrderModel){
    return this.db.list('/orders').push(order);
  }

  public getOrders(){
    return this.db.list('/orders').valueChanges();
  }

  public getOrderByUser(userId){
    return this.db.list('/orders/',
        ref => ref.orderByChild('userId').equalTo(userId)).valueChanges();
  }
}
