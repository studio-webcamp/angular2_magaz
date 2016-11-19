import Tshirt from "./Tshirt";

class Order {
    items:Array<Tshirt> = [];
    private totalPrice:number = 0;
    customer:string = '';
    phone:string = '';
    email:string = '';
    city:string = '';

    constructor() {
    }

    addItem(item:Tshirt) {
        this.items.push(item);
        this.setTotalPrice(item.price);
        console.log("hello");
    };

    removeItem(item:Tshirt) {
        let indexOf:number = this.items.indexOf(item);
        if (indexOf != -1) {
            this.items.splice(indexOf, 1);
            this.setTotalPrice(-item.price);
        }
    };

    getTotalPrice() {
        return this.totalPrice;
    };

    setTotalPrice(price:number = 0) {
        this.totalPrice += price;
    };

    addCustomer(customer:string) {
        this.customer = customer;
    };
}

export default Order;
