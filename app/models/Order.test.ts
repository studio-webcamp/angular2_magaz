import Order from "./Order";
import {expect} from "chai";
import Tshirt from "./Tshirt";

describe('Order class', ()=> {
    let order:Order;
    beforeEach(()=> {
        order = new Order();
    });
    it('should construct Order instance', ()=> {
        expect(order.items).to.have.lengthOf(0);
        expect(order.items).to.be.an.instanceof(Array);
        expect(order.getTotalPrice()).to.eq(0);
    });

    it('should add item to order', ()=> {
        let t1:Tshirt = new Tshirt(1, "x", Tshirt.Size.L, "", 100);
        order.addItem(t1);
        expect(order.items).to.have.lengthOf(1);
        expect(order.getTotalPrice()).to.eq(100);
    });

    it('should compute total price', ()=> {
        let t1:Tshirt = new Tshirt(1, "x", Tshirt.Size.L, "", 100);
        order.addItem(t1);
        expect(order.getTotalPrice()).to.eq(100);
        let t2:Tshirt = new Tshirt(2, "x", Tshirt.Size.L, "", 200);
        order.addItem(t2);
        expect(order.getTotalPrice()).to.eq(300);
    });

    it('should compute total price', ()=> {
        let t1:Tshirt = new Tshirt(1, "x", Tshirt.Size.L, "", 100);
        let t2:Tshirt = new Tshirt(2, "x", Tshirt.Size.L, "", 200);
        order.addItem(t1);
        order.addItem(t2);
        order.removeItem(t1);
        expect(order.items).to.have.lengthOf(1);
        expect(order.getTotalPrice()).to.eq(200);
    })
});
