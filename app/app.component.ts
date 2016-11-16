/**
 * Created by lenka on 10/29/16.
 */
import {Component} from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
    <h1>{{ title }}</h1>
    <tshirt-list></tshirt-list>
    <nav>
        <a [routerLink]="['/dashboard']">Dashboard </a>
        <a [routerLink]="['/order']">Order </a> 
       
    </nav>
    <router-outlet></router-outlet>
`
})
export class AppComponent {
    title = 'Your Magaz'
}
