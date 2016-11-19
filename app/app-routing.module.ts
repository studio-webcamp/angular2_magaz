import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TshirtListComponent }  from './components/tshirtlist.component';
import {CartComponent} from "./components/cart.component";
const routes: Routes = [
    { path: '', redirectTo: '/tshirts', pathMatch: 'full' },
    { path: 'tshirts',  component: TshirtListComponent },
    { path: 'cart',  component: CartComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
