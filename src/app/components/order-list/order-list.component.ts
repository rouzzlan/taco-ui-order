import {Component} from '@angular/core';
import {OrderListItem} from "../../model/Order";
import {Observable} from "rxjs";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  panelOpenState = false;
  orders: Observable<OrderListItem[]>;


  constructor(private service: OrderService) {
    this.orders = service.getOrders();
  }
}
