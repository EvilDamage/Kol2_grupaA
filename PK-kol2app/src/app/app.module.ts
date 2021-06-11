import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPKComponent } from './components/orders-pk/orders-pk.component';
import { OrdersItemPKComponent } from './components/orders-item-pk/orders-item-pk.component';
import { OrdersDetaisPKComponent } from './components/orders-detais-pk/orders-detais-pk.component';
import {HttpClientModule} from "@angular/common/http";
import {PKDataService} from "./services/pk-data.service";


@NgModule({
  declarations: [
    AppComponent,
    OrdersPKComponent,
    OrdersItemPKComponent,
    OrdersDetaisPKComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PKDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
