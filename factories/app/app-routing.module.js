"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var preload_1 = require("./preload");
var not_found_component_1 = require("./not-found/not-found.component");
// import { IndexComponent } from './index/index.component';
var ROUTES = [
    {
        path: 'index',
        loadChildren: 'app/index/index.module#IndexModule',
    }, {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }, {
        path: '**',
        component: not_found_component_1.NotFoundComponent
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule.forRoot(ROUTES, {
                            useHash: true,
                            preloadingStrategy: preload_1.PreloadSelectedModulesList,
                        })
                    ],
                    exports: [router_1.RouterModule]
                },] },
    ];
    /** @nocollapse */
    AppRoutingModule.ctorParameters = function () { return []; };
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map