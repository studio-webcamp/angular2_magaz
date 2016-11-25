/**
 * Created by lenka on 10/29/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {TshirtListComponent} from "./components/tshirtList.component";
import Magaz from "./models/Magaz";
import {TshirtComponent} from "./components/tshirt.component";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "./components/order.component";
import {AlltshirtsComponent} from "./components/alltishirts.component";

//noinspection TypeScriptValidateTypes
@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/tshirts',
                pathMatch: 'full'
            },
            {
                path: 'tshirts',
                component: TshirtListComponent
            },
            {
                path: 'order',
                component: OrderComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        TshirtListComponent,
        TshirtComponent,
        AlltshirtsComponent,
        OrderComponent
    ],
    bootstrap: [AppComponent],
    providers: [Magaz]
})
export class AppModule {
}
