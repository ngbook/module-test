"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { IndexComponent } from '../index/index.component';
var TestComponent = (function () {
    function TestComponent(resolver, injector, data, viewRef) {
        this.resolver = resolver;
        this.injector = injector;
        this.data = data;
        this.viewRef = viewRef;
    }
    TestComponent.prototype.ngOnInit = function () {
        // const factory = this.resolver.resolveComponentFactory(IndexComponent);
        // console.log(factory);
        // this.viewRef.createComponent(factory);
        // console.log(this.data);
    };
    TestComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-test',
                    templateUrl: './test.component.html',
                    styleUrls: ['./test.component.scss'],
                },] },
    ];
    /** @nocollapse */
    TestComponent.ctorParameters = function () { return [
        { type: core_1.ComponentFactoryResolver, },
        { type: core_1.Injector, },
        { type: undefined, decorators: [{ type: core_1.Inject, args: ['a',] },] },
        { type: core_1.ViewContainerRef, },
    ]; };
    return TestComponent;
}());
exports.TestComponent = TestComponent;
//# sourceMappingURL=test.component.js.map