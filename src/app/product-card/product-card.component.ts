import {Component, Input, OnInit} from "@angular/core";
import {ProductModel} from "../models/product.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: ProductModel = new ProductModel();
  @Input('show-action') showAction: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
