import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../shared/services/order.service";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-a-orders',
  templateUrl: './a-orders.component.html',
  styleUrls: ['./a-orders.component.css']
})
export class AOrdersComponent implements OnInit {

  constructor(private authService: UserService,
              private orderService: OrderService) { }

  ngOnInit() {
  }

  public getOrders(){
    this.orderService.getOrders();
  }

}
