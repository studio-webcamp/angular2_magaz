/**
 * Created by lenka on 10/30/16.
 */
"use strict";
var Fetch = (function () {
    function Fetch() {
    }
    Fetch.prototype.get = function (url) {
        return fetch(url);
    };
    return Fetch;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Fetch;
//# sourceMappingURL=Fetch.js.map