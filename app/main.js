"use strict";
/**
 * Created by lenka on 10/29/16.
 */
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var Magaz_1 = require("./models/Magaz");
var magaz = new Magaz_1.default();
magaz.getAllItems();
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map