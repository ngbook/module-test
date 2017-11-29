"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var test_component_1 = require("./test.component");
var user_service_module_1 = require("../services/user-service.module");
var TestModule = (function () {
    function TestModule() {
    }
    TestModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        user_service_module_1.UserModule,
                    ],
                    exports: [
                        test_component_1.TestComponent,
                    ],
                    declarations: [
                        test_component_1.TestComponent,
                    ],
                    entryComponents: [
                        test_component_1.TestComponent,
                    ],
                    providers: [
                        // UserService,
                        { provide: 'a', useValue: 'value-in-test-mod' }
                    ],
                },] },
    ];
    /** @nocollapse */
    TestModule.ctorParameters = function () { return []; };
    return TestModule;
}());
exports.TestModule = TestModule;
//# sourceMappingURL=test.module.js.map