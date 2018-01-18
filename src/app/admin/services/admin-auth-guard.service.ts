import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {LoginService} from "shared/services/auth.service";
import {UserService} from "shared/services/user.service";

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private auth: LoginService, private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.auth.currentUser$
      .map((user) => user.isAdmin);
   }
}
