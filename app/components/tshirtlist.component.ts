/**
 * Created by Ivan on 15.11.2016.
 */

import {Component, OnInit} from "@angular/core";
import Magaz from "../models/Magaz";
import Tshirt from "../models/Tshirt";
@Component({
    selector: 'tshirt-list',
    templateUrl: './app/components/tshirtlist.component.html'
})
export class TshirtlistComponent implements OnInit{
    private tshirtList: Tshirt;
    ngOnInit(): void {
        this.getItems();
    }
    constructor(private magaz: Magaz) {
    }
    getItems(){
        return this.magaz.getAllItems().then((tshirts)=> {
            this.tshirtList = tshirts;
            return tshirts;
        });
    }
}
