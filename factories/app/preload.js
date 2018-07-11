"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
var PreloadSelectedModulesList = /** @class */ (function () {
    function PreloadSelectedModulesList() {
    }
    PreloadSelectedModulesList.prototype.preload = function (route, load) {
        return route.data && route.data.preload ?
            load() : Observable_1.Observable.of(null);
    };
    return PreloadSelectedModulesList;
}());
exports.PreloadSelectedModulesList = PreloadSelectedModulesList;
//# sourceMappingURL=preload.js.map