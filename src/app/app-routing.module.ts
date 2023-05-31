import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderListComponent} from "./components/order-list/order-list.component";
import {OrderSubmittedComponent} from "./components/order-submitted/order-submitted.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";

const routes: Routes = [
  {path: '', component: WelcomeComponent, pathMatch: "full"},
  {path: 'orders', component: OrderListComponent},
  {path: 'create-order', component: CreateOrderComponent},
  {path: 'order-submitted', component: OrderSubmittedComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
