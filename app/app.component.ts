/**
 * Created by lenka on 10/29/16.
 */
import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <h1>Tshirts</h1>
        <md-nav-list>
            <button md-raised-button routerLink="/tshirts">Tshirts</button>
            <button md-raised-button routerLink="/order">Your Orders</button>
        </md-nav-list>
        <router-outlet></router-outlet>
       `
})
export class AppComponent {
}
