import {RouterModule, Routes} from "@angular/router";
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {HomeComponent} from "./home/home.component";
import {CheckOutComponent} from "./check-out/check-out.component";
import {LoginComponent} from "./login/login.component";
import {ProductsComponent} from "./products/products.component";
import {OrderSuccessComponent} from "./order-success/order-success.component";
import {AOrdersComponent} from "./admin/a-orders/a-orders.component";
import {AProductsComponent} from "./admin/a-products/a-products.component";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {AuthGuard} from "./auth-guard.service";
import {AdminAuthGuard} from "./admin-auth-guard.service";
import {ProductFormComponent} from "./product-form/product-form.component";


export const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shopping-cart', component: ShoppingCardComponent},
  {path: 'products', component: ProductsComponent},

  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard]},
  {path: 'admin/orders', component: AOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products', component: AProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
