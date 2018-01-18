import {RouterModule, Routes} from "@angular/router";

import {ProductFormComponent} from "./product-form/product-form.component";
import {AuthGuard} from "shared/services/auth-guard.service";
import {AOrdersComponent} from "./a-orders/a-orders.component";
import {AProductsComponent} from "./a-products/a-products.component";
import {AdminAuthGuard} from "./services/admin-auth-guard.service";

const ADMIN_ROUTE: Routes = [
  {path: 'admin/orders', component: AOrdersComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  {path: 'admin/products', component: AProductsComponent, canActivate: [AuthGuard, AdminAuthGuard]}
];

export const routing = RouterModule.forChild(ADMIN_ROUTE);
