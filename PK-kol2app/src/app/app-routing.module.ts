import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersPKComponent} from "./components/orders-pk/orders-pk.component";
import {OrdersDetaisPKComponent} from "./components/orders-detais-pk/orders-detais-pk.component";


const routes: Routes = [
  {
    path: '',
    component: OrdersPKComponent,
  },
  {
    path: 'orders/detail/:id',
    component: OrdersDetaisPKComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
