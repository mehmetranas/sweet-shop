import {Component} from '@angular/core';
import {LoginService} from "../login/auth.service";
import {UserModel} from "../models/user.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent {
  public user: UserModel;

  constructor(public authService: LoginService) {
    this.authService.currentUser$
      .subscribe(user => this.user = user);
  }

  public logout(){
    this.authService.logout();
  }

}
