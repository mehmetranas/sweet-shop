import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import { AppComponent } from './app.component';
import { routing} from "./app-router";
import {SharedModule} from "shared/shared.module";
import {AdminModule} from "./admin/admin.module";
import {ShoppingModule} from "./shopping/shopping.module";
import {CoreModule} from "./core/core.module";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    SharedModule,
    AdminModule,
    CoreModule,
    ShoppingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
