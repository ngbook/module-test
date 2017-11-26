import { OnInit, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
export declare class TestComponent implements OnInit {
    private resolver;
    private injector;
    private data;
    private viewRef;
    constructor(resolver: ComponentFactoryResolver, injector: Injector, data: any, viewRef: ViewContainerRef);
    ngOnInit(): void;
}
