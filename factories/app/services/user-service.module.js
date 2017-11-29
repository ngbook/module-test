"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UserModule = (function () {
    function UserModule() {
    }
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule,
            providers: [
                user_service_1.UserService
            ]
        };
    };
    UserModule.decorators = [
        { type: core_1.NgModule, args: [{
                    providers: [
                        user_service_1.UserService,
                    ]
                },] },
    ];
    /** @nocollapse */
    UserModule.ctorParameters = function () { return []; };
    return UserModule;
}());
exports.UserModule = UserModule;
//# sourceMappingURL=user-service.module.js.map