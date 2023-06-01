import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, OrderListItem, OrderSummary} from "../model/Order";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submitOrder(newOrder: Order): Observable<OrderSummary> {
    return this.http.post<OrderSummary>(`${environment.submit_server_url}:${environment.submit_server_port}/order/`, newOrder);
  }

  getOrders(): Observable<OrderListItem[]> {
    return this.http.get<OrderListItem[]>(`${environment.read_server_url}:${environment.read_server_port}/order/`)
  }
}
