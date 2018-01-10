import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {LoginService} from "./auth.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: LoginService, private router: Router, private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
  }

  googleLogin() {
    const url = this.route.snapshot.queryParams.returnUrl || 'home';
    this.authService.loginByGoogle()
      .then((data) => {
        this.router.navigate([url]);
        this.userService.save(data.user);
      });
  }

}
