import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoginService} from "../login/auth.service";
import {UserModel} from "../models/user.model";
import {ShoppingCartService} from "../shopping-cart.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {CartModel} from "../models/cart.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy{
  public user: UserModel;
  public isNavbarCollapsed: boolean = false;
  public cart$: Observable<CartModel>;
  public subscribeCount: Subscription;

  constructor(public authService: LoginService, private shoppingCartService: ShoppingCartService) {
    this.authService.currentUser$
      .subscribe(user => this.user = user);
  }

  public logout(){
    this.authService.logout();
  }

  public async ngOnInit(){
    this.cart$ = await this.shoppingCartService.getCart();
  }

  public ngOnDestroy(){
    this.subscribeCount.unsubscribe();
  }

}
