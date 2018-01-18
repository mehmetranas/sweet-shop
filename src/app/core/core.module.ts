import { NgModule } from '@angular/core';
import {MenuComponent} from "./menu/menu.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ShoppingModule} from "../shopping/shopping.module";
import {routing} from "./core.route";
import {SharedModule} from "shared/shared.module";

@NgModule({
  imports: [
    SharedModule,
    ShoppingModule,
    routing
  ],
  declarations: [
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent
  ],
  exports:[
    NavBarComponent
  ]
})
export class CoreModule { }
