"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("./services/user.service");
var AppComponent = (function () {
    function AppComponent(user, data) {
        this.user = user;
        this.user.id = 100;
        console.log('set user id at app');
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
        { type: user_service_1.UserService, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: ['a',] },] },
    ]; };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map