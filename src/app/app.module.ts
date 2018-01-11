import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routing} from "./app-router";
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AProductsComponent } from './admin/a-products/a-products.component';
import { AOrdersComponent } from './admin/a-orders/a-orders.component';
import { LoginComponent } from './login/login.component';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {LoginService} from "./login/auth.service";
import {AuthGuard} from "./auth-guard.service";
import {UserService} from "./user.service";
import {AdminAuthGuard} from "./admin-auth-guard.service";
import { ProductFormComponent } from './product-form/product-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryService} from "./category.service";
import {ProductService} from "./product.service";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import {ShoppingCartService} from "./shopping-cart.service";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCardComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AProductsComponent,
    AOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    MenuComponent,
    ProductCardComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgxDatatableModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [
    LoginService,
    AuthGuard,
    AdminAuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
