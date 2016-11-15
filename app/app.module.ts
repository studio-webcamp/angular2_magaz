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

@NgModule({
    imports: [BrowserModule, MaterialModule.forRoot()],
    declarations: [AppComponent, TshirtListComponent, TshirtComponent],
    bootstrap: [AppComponent],
    providers: [Magaz]
})
export class AppModule {
}
