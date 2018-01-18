import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import "rxjs/add/operator/map"
import {Observable} from "rxjs/Observable";

import {LoginService} from "shared/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private auth: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user$.map((user) => {
      if(user) return true;
      else
        this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    })
  }



}
