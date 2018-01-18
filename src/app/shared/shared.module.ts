import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {environment} from "../../environments/environment";

import {ProductQuantityComponent} from "shared/components/product-quantity/product-quantity.component";
import {ProductCardComponent} from "shared/components/product-card/product-card.component";
import {CategoryService} from "shared/services/category.service";
import {ShoppingCartService} from "shared/services/shopping-cart.service";
import {UserService} from "shared/services/user.service";
import {OrderService} from "shared/services/order.service";
import {LoginService} from "shared/services/auth.service";
import {AuthGuard} from "shared/services/auth-guard.service";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,

  ],
  exports: [
    ProductCardComponent,
    ProductQuantityComponent,
    CommonModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot().ngModule
  ],

  providers: [
    AuthGuard,
    UserService,
    CategoryService,
    LoginService,
    ShoppingCartService,
    OrderService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
