import {Component, OnInit} from "@angular/core";
import Magaz from "../models/Magaz";
import Tshirt from "../models/Tshirt";
@Component({
    moduleId: module.id,
    selector: 'tshirt-list',
    templateUrl: 'tshirtList.component.html',
    styleUrls:['tshirtList.component.css']
})
export class TshirtListComponent implements OnInit {
    private tshirtList:Tshirt[];

    ngOnInit():void {
        this.getItems();
    }

    constructor(private magaz:Magaz) {
    }

    getItems() {
        return this.magaz.getAllItems().then((tshirts)=> {
            this.tshirtList = tshirts;
            return tshirts;
        });
    }

    addItemToOrder(item:Tshirt){
        this.magaz.addItemToOrder(item);
    }
}
