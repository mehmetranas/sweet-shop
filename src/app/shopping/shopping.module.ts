import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {ShoppingCartWidgetComponent} from "./shopping-cart-widget/shopping-cart-widget.component";
import {CheckoutFormComponent} from "./checkout-form/checkout-form.component";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";
import {routing} from "./shopping.route";
import {ProductService} from "shared/services/product.service";
import {SharedModule} from "shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductsComponent,
    CheckoutFormComponent,
    ShoppingCartWidgetComponent
  ],
  providers:[
    ProductService
  ],
  exports:[
    ProductsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingModule { }
