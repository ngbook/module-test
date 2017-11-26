"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var test_component_1 = require("./test.component");
var user_service_1 = require("../services/user.service");
// import { IndexComponent } from '../index/index.component';
var TestModule = (function () {
    function TestModule() {
    }
    TestModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                    ],
                    exports: [
                        test_component_1.TestComponent,
                    ],
                    declarations: [
                        test_component_1.TestComponent,
                    ],
                    entryComponents: [],
                    providers: [
                        user_service_1.UserService,
                        { provide: 'a', useValue: 'test' }
                    ],
                },] },
    ];
    /** @nocollapse */
    TestModule.ctorParameters = function () { return []; };
    return TestModule;
}());
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map