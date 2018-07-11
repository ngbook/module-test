"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./services/user.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(user, data) {
        var _this = this;
        this.user = user;
        this.user.id = 100;
        console.log('set user id at app');
        setTimeout(function () {
            console.log('got user id', _this.user.id);
            // Result is changed by index module. So they are the same instance.
        }, 1000);
    }
    AppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.scss']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: user_service_1.UserService },
        { type: undefined, decorators: [{ type: core_1.Inject, args: ['a',] }] }
    ]; };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map