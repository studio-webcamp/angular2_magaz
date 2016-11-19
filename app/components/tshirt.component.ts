import {Component, EventEmitter,Input, Output} from "@angular/core";
import Tshirt from "../models/Tshirt";
@Component({
    moduleId: module.id,
    selector: 'tshirt',
    templateUrl: 'tshirt.component.html',
    styleUrls: ['tshirt.component.css']
})
export class TshirtComponent{
    @Input()
    private tshirt: Tshirt;
    @Output() onOrdered = new EventEmitter<Tshirt>();

    order(){
        this.onOrdered.emit(this.tshirt);
    }
}
