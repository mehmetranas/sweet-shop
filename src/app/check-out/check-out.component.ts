import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {OrderModel} from "../models/order.model";
import {ShippingModel} from "../models/shipping.model";

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  addressForm: FormGroup ;

  constructor() { }

  ngOnInit() {
    this.addressForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    });
  }

  public placeOrder() {
    let shipping = new ShippingModel({...this.addressForm.value});

    this.addressForm.reset();
  }
}
