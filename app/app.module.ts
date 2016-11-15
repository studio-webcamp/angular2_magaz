/**
 * Created by lenka on 10/29/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {TshirtlistComponent} from "./components/tshirtlist.component";
import Magaz from "./models/Magaz";

@NgModule({
    imports: [BrowserModule,
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
        TshirtlistComponent,
        OrderComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers:[Magaz]
})

export class AppModule {
}
