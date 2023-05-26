import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './parts/toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { MainComponent } from './pages/main/main.component';
import { CreateOrderComponent } from './components/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainComponent,
    CreateOrderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
