import {Component, OnDestroy, OnInit} from "@angular/core";
import {LoginService} from "shared/services/auth.service";
import {UserModel} from "shared/models/user.model";
import {ShoppingCartService} from "shared/services/shopping-cart.service";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {CartModel} from "shared/models/cart.model";

@Component ({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit, OnDestroy{
  public user: UserModel;
  public isNavbarCollapsed: boolean = false;
  public cart$: Observable<CartModel>;
  public subscribe: Subscription;

  constructor(public authService: LoginService, private shoppingCartService: ShoppingCartService) {
    this.authService.currentUser$
      .subscribe(user => this.user = user);
  }

  public logout(){
    this.authService.logout();
  }

  public async ngOnInit(){
    if(localStorage.getItem('shoppingId'))
    this.cart$ = await this.shoppingCartService.getCart();
    else{
      this.subscribe = this.shoppingCartService.sendCart.subscribe(cart$ => this.cart$ = cart$);
    }
  }

  public ngOnDestroy(){
    this.subscribe.unsubscribe();
  }

}
