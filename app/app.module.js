"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by lenka on 10/29/16.
 */
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require("@angular/material");
var app_component_1 = require('./app.component');
var tshirtlist_component_1 = require("./components/tshirtlist.component");
var Magaz_1 = require("./models/Magaz");
var tshirt_component_1 = require("./components/tshirt.component");
var app_routing_module_1 = require("./app-routing.module");
var cart_component_1 = require("./components/cart.component");
var order_form_component_1 = require("./components/order-form.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, material_1.MaterialModule.forRoot()],
            declarations: [app_component_1.AppComponent, tshirtlist_component_1.TshirtListComponent, tshirt_component_1.TshirtComponent, cart_component_1.CartComponent, order_form_component_1.OrderFormComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [Magaz_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map