import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AOrdersComponent} from "./a-orders/a-orders.component";
import {ProductFormComponent} from "./product-form/product-form.component";
import {AProductsComponent} from "./a-products/a-products.component";
import {AdminAuthGuard} from "./services/admin-auth-guard.service";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {routing} from "./admin.route";
import {SharedModule} from "shared/shared.module";

@NgModule({
  imports: [
    NgxDatatableModule,
    routing,
    SharedModule
  ],
  declarations: [
    AProductsComponent,
    AOrdersComponent,
    ProductFormComponent
  ],
  providers: [
    AdminAuthGuard,
  ]
})
export class AdminModule { }
