"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var IndexComponent = (function () {
    function IndexComponent(user, data) {
        this.user = user;
        this.data = data;
    }
    IndexComponent.prototype.ngOnInit = function () {
        console.log('get user id at index:', this.user.id);
        console.log(this.data);
    };
    IndexComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-index',
                    templateUrl: './index.component.html',
                    styleUrls: ['./index.component.scss'],
                },] },
    ];
    /** @nocollapse */
    IndexComponent.ctorParameters = function () { return [
        { type: user_service_1.UserService, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: ['a',] },] },
    ]; };
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map