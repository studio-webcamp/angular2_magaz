import {Component, OnInit} from "@angular/core";
import Magaz from "../models/Magaz";
import Order from "../models/Order";
@Component({
    selector: 'cart',
    moduleId: module.id,
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    private orders:Order[];

    ngOnInit():void {
        this.getOrders();
    }

    constructor(private magaz:Magaz) {
    }

    getOrders() {
        this.orders = this.magaz.getOrders();
        return this.orders;
    }

    currentOrder():Order{
        return this.magaz.getCurrentOrder();
    }
}