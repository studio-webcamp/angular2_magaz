/**
 * Created by lenka on 10/29/16.
 */
import {NgModule}      from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from "@angular/material";
import {AppComponent}   from './app.component';
import {TshirtListComponent} from "./components/tshirtlist.component";
import Magaz from "./models/Magaz";
import {TshirtComponent} from "./components/tshirt.component";
import {AppRoutingModule} from "./app-routing.module";
import {CartComponent} from "./components/cart.component";
import {OrderFormComponent} from "./components/order-form.component";

@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, MaterialModule.forRoot()],
    declarations: [AppComponent, TshirtListComponent, TshirtComponent, CartComponent, OrderFormComponent],
    bootstrap: [AppComponent],
    providers: [Magaz]
})
export class AppModule {
}
