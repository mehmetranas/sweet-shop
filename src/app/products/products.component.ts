import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService} from "../product.service";
import {Subscription} from "rxjs/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products = [];
  public filteredProducts = [];
  private subscribes: Subscription[] = [];
  private query: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
   let subscribePr = productService.getProducts()
      .subscribe((products) => {
        this.products = products;
        this.filter()});

    this.subscribes.push(subscribePr);
  }

  ngOnInit() {}

  ngOnDestroy() {
    for(let sub of this.subscribes){
      sub.unsubscribe();
    }
  }

  filter() {
    let subscribeQp = this.route.queryParamMap.subscribe(qp => {
      this.query = qp.get('category');
      this.filteredProducts = (this.query)?
      this.products
        .filter(p =>
          p.category.toLowerCase() == this.query.toLowerCase()):
        this.products;
    });
    this.subscribes.push(subscribeQp);
  }
}
