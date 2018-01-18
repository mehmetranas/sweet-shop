import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./core/home/home.component";
import {LoginComponent} from "./core/login/login.component";

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
