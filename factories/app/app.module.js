"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
// import { UserService } from './services/user.service';
var app_component_1 = require("./app.component");
// import { IndexModule } from './index/index.module';
var test_module_1 = require("./test/test.module");
// import { IndexComponent } from './index/index.component';
var app_routing_module_1 = require("./app-routing.module");
var preload_1 = require("./preload");
var not_found_component_1 = require("./not-found/not-found.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        // IndexComponent,
                        not_found_component_1.NotFoundComponent,
                    ],
                    imports: [
                        platform_browser_1.BrowserModule,
                        // IndexModule,
                        test_module_1.TestModule,
                        app_routing_module_1.AppRoutingModule,
                    ],
                    entryComponents: [],
                    providers: [
                        preload_1.PreloadSelectedModulesList,
                        { provide: 'a', useValue: 'app' }
                    ],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map