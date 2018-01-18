import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../shared/services/order.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  public orders$;

  constructor(private authService: UserService,
              private orderService: OrderService) { }

  ngOnInit() {
  }

  public getOrderByUser(){
    const user = this.authService.user$();
    this.orders$ = this.orderService.getOrderByUser(user.uid);
  }

}
