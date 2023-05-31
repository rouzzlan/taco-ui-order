import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {OrderSummary} from "../../model/Order";

@Component({
  selector: 'app-order-submitted',
  templateUrl: './order-submitted.component.html',
  styleUrls: ['./order-submitted.component.css']
})
export class OrderSubmittedComponent{
  submitterOrder: OrderSummary;

  constructor(private router:Router) {
    this.submitterOrder = <OrderSummary>this.router.getCurrentNavigation()?.extras.state;
  }

}
