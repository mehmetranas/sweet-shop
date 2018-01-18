import {Component, Input, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CartModel} from "../../shared/models/cart.model";
import {ShippingModel} from "../../shared/models/shipping.model";
import {OrderService} from "../../shared/services/order.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";
import {OrderModel} from "../../shared/models/order.model";

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Input('shopping-cart') shoppingCart: CartModel;
  public addressForm: FormGroup ;
  private shipping: ShippingModel;
  private userId: string;

  constructor(private userService: UserService,
              private orderService: OrderService,
              private shoppingCartService: ShoppingCartService,
              private router: Router) { }

  async ngOnInit() {
    this.addressForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      address1: new FormControl(null, Validators.required),
      address2: new FormControl(null, Validators.required),
      city: new FormControl(null, Validators.required)
    });

    this.userId = (await this.userService.user$()).uid;
 }

  public async placeOrder() {
    this.shipping = new ShippingModel({...this.addressForm.value});
    const order = new OrderModel(this.shipping,this.shoppingCart.itemModels,this.userId);
    if(!order.items.length) alert("Cart is empty");
    else
      this.orderService.create(order)
        .then(resolve => {
            console.log('Successfully created order');
            this.addressForm.reset();
            this.router.navigate(['order-success', resolve.key]);
            this.shoppingCartService.clearAllItems();
          },
          reject => console.log("An error occurred", reject));
  }

}
