import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";


const CORE_ROUTE: Routes = [
  {path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forChild(CORE_ROUTE);
