"use strict";
var Order_1 = require("./Order");
var Tshirt_1 = require("./Tshirt");
var Fetch_1 = require("./Fetch");
var Magaz = (function () {
    function Magaz() {
        this.orders = [];
        // private items = [];
        this.cities = [];
        this.http = new Fetch_1.default();
    }
    Magaz.prototype.getOrders = function () {
        return this.orders;
    };
    ;
    Magaz.prototype.getCurrentOrder = function () {
        return this.orders[0];
    };
    ;
    Magaz.prototype.addItemToOrder = function (item) {
        if (!this.orders.length) {
            this.addOrder(new Order_1.default());
        }
        this.orders[0].addItem(item);
    };
    ;
    Magaz.prototype.addOrder = function (order) {
        return this.orders.push(order);
    };
    ;
    Magaz.prototype.getAllItems = function () {
        return this.http.get('/data/tshirts.json').then(function successCallback(response) {
            return response.json();
        }).then(function (json) {
            return json.map(function (t) {
                return new Tshirt_1.default(t.sku, t.brand, Tshirt_1.default.Size[t.size], t.color, t.price);
            });
        });
    };
    ;
    Magaz.prototype.getCitiesList = function () {
        // return $http({
        //     method: 'GET',
        //     url: '/data/cities.json'
        // }).then(function successCallback(response) {
        //     cities = response.data;
        //     return cities;
        // }, function errorCallback(response) {
        //     console.error(response);
        // });
    };
    ;
    return Magaz;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Magaz;
//# sourceMappingURL=Magaz.js.map