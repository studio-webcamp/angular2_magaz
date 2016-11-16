/**
 * Created by lenka on 10/29/16.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}   from './app.component';
import {OrderComponent} from "./order.component";
import {RouterModule} from "@angular/router";
import {TshirtlistComponent} from './components/tshirtlist.component';
import Magaz from './models/Magaz';
/*import {MaterialModule} from '@angular/material';*/

@NgModule({
    imports: [BrowserModule,
        /*MaterialModule.forRoot(),*/
        RouterModule.forRoot([
            {
                path: 'order',
                component: OrderComponent
            },
        ])
    ],
    declarations: [
        AppComponent,
        TshirtlistComponent,
        OrderComponent,
    ],
    bootstrap: [AppComponent],
    providers:[Magaz]
})

export class AppModule {
}
