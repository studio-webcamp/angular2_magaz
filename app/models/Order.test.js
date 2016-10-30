"use strict";
var Order_1 = require("./Order");
var chai_1 = require("chai");
var Tshirt_1 = require("./Tshirt");
describe('Order class', function () {
    var order;
    beforeEach(function () {
        order = new Order_1.default();
    });
    it('should construct Order instance', function () {
        chai_1.expect(order.items).to.have.lengthOf(0);
        chai_1.expect(order.items).to.be.an.instanceof(Array);
        chai_1.expect(order.getTotalPrice()).to.eq(0);
    });
    it('should add item to order', function () {
        var t1 = new Tshirt_1.default(1, "x", Tshirt_1.default.Size.L, "", 100);
        order.addItem(t1);
        chai_1.expect(order.items).to.have.lengthOf(1);
        chai_1.expect(order.getTotalPrice()).to.eq(100);
    });
    it('should compute total price', function () {
        var t1 = new Tshirt_1.default(1, "x", Tshirt_1.default.Size.L, "", 100);
        order.addItem(t1);
        chai_1.expect(order.getTotalPrice()).to.eq(100);
        var t2 = new Tshirt_1.default(2, "x", Tshirt_1.default.Size.L, "", 200);
        order.addItem(t2);
        chai_1.expect(order.getTotalPrice()).to.eq(300);
    });
    it('should compute total price', function () {
        var t1 = new Tshirt_1.default(1, "x", Tshirt_1.default.Size.L, "", 100);
        var t2 = new Tshirt_1.default(2, "x", Tshirt_1.default.Size.L, "", 200);
        order.addItem(t1);
        order.addItem(t2);
        order.removeItem(t1);
        chai_1.expect(order.items).to.have.lengthOf(1);
        chai_1.expect(order.getTotalPrice()).to.eq(200);
    });
});
//# sourceMappingURL=Order.test.js.map