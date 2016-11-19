"use strict";
var Order = (function () {
    function Order() {
        this.items = [];
        this.totalPrice = 0;
        this.customer = '';
        this.phone = '';
        this.email = '';
        this.city = '';
    }
    Order.prototype.addItem = function (item) {
        this.items.push(item);
        this.setTotalPrice(item.price);
    };
    ;
    Order.prototype.removeItem = function (item) {
        var indexOf = this.items.indexOf(item);
        if (indexOf != -1) {
            this.items.splice(indexOf, 1);
            this.setTotalPrice(-item.price);
        }
    };
    ;
    Order.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    ;
    Order.prototype.setTotalPrice = function (price) {
        if (price === void 0) { price = 0; }
        this.totalPrice += price;
    };
    ;
    Order.prototype.addCustomer = function (customer) {
        this.customer = customer;
    };
    ;
    return Order;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Order;
//# sourceMappingURL=Order.js.map