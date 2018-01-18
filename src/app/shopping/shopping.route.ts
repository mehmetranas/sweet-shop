import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {ProductsComponent} from "./products/products.component";
import {ShoppingCardComponent} from "./shopping-card/shopping-card.component";
import {AuthGuard} from "shared/services/auth-guard.service";
import {RouterModule, Routes} from "@angular/router";


const SHOPPING_ROUTE: Routes = [
  {path: 'shopping-cart', component: ShoppingCardComponent},
  {path: 'products', component: ProductsComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forChild(SHOPPING_ROUTE);
