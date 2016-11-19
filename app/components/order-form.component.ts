import {Component, Input} from "@angular/core";
import Order from "../models/Order";
@Component({
    moduleId: module.id,
    selector: 'order-form',
    templateUrl: 'order-form.component.html'
})
export class OrderFormComponent{
    @Input() order:Order;
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
}
