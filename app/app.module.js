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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var tshirtList_component_1 = require("./components/tshirtList.component");
var Magaz_1 = require("./models/Magaz");
var tshirt_component_1 = require("./components/tshirt.component");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var order_component_1 = require("./components/order.component");
var alltishirts_component_1 = require("./components/alltishirts.component");
//noinspection TypeScriptValidateTypes
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot([
                    {
                        path: 'tshirts',
                        component: tshirtList_component_1.TshirtListComponent
                    },
                    {
                        path: 'order',
                        component: order_component_1.OrderComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                tshirtList_component_1.TshirtListComponent,
                tshirt_component_1.TshirtComponent,
                alltishirts_component_1.AlltshirtsComponent,
                order_component_1.OrderComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [Magaz_1.default]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map