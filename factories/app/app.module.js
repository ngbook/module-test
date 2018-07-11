"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var test_module_1 = require("./test/test.module");
var app_routing_module_1 = require("./app-routing.module");
var preload_1 = require("./preload");
var not_found_component_1 = require("./not-found/not-found.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        not_found_component_1.NotFoundComponent,
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        test_module_1.TestModule,
                        app_routing_module_1.AppRoutingModule,
                    ],
                    providers: [
                        preload_1.PreloadSelectedModulesList,
                        { provide: 'a', useValue: 'value-in-app-mod' }
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map