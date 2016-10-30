/**
 * Created by lenka on 10/30/16.
 */
"use strict";
var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
})(Size || (Size = {}));
var Tshirt = (function () {
    function Tshirt(sku, brand, size, color, price) {
        this.sku = sku;
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.price = price;
    }
    Tshirt.Size = Size;
    return Tshirt;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Tshirt;
//# sourceMappingURL=Tshirt.js.map