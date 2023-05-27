import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order, OrderSummary} from "../model/Order";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  submitOrder(newOrder: Order): Observable<OrderSummary> {
    return this.http.post<OrderSummary>(`${environment.server_url}:${environment.server_port}/order/`, newOrder);
  }
}
