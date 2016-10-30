/**
 * Created by lenka on 10/30/16.
 */
import {expect} from 'chai';
import Tshirt from "./Tshirt";

describe('tshirt', ()=> {
    it('should have size form static field', ()=> {
        let t1:Tshirt = new Tshirt(123, "x", Tshirt.Size.M, "", 123);
        expect(t1.size).to.eq(Tshirt.Size.M);
    });
});
