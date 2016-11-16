/**
 * Created by lenka on 10/29/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {TshirtListComponent} from "./components/tshirtList.component";
import Magaz from "./models/Magaz";
import {MaterialModule} from "@angular/material";
import {TshirtComponent} from "./components/tshirt.component";


@NgModule({
    imports: [BrowserModule,
        MaterialModule.forRoot(),
        RouterModule.forRoot([
            {
                path: 'order',
                component: OrderComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ])
    ],
    declarations: [
        AppComponent,
        TshirtComponent,
        TshirtListComponent,
        OrderComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers:[Magaz]
})

export class AppModule {
}
