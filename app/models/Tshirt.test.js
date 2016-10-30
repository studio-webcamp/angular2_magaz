"use strict";
/**
 * Created by lenka on 10/30/16.
 */
var chai_1 = require('chai');
var Tshirt_1 = require("./Tshirt");
describe('tshirt', function () {
    it('should have size form static field', function () {
        var t1 = new Tshirt_1.default(123, "x", Tshirt_1.default.Size.M, "", 123);
        chai_1.expect(t1.size).to.eq(Tshirt_1.default.Size.M);
    });
});
//# sourceMappingURL=Tshirt.test.js.map