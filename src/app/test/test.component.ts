import {
    Component, OnInit, Inject,
    ComponentFactoryResolver,
    Injector, ViewContainerRef
} from '@angular/core';
// import { IndexComponent } from '../index/index.component';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    providers: [
        {provide: 'a', useValue: 'value-in-component'}
    ]
})
export class TestComponent implements OnInit {

    constructor(private resolver: ComponentFactoryResolver,
                private injector: Injector,
                @Inject('a')private data,
                private viewRef: ViewContainerRef) { }

    ngOnInit() {
        // const factory = this.resolver.resolveComponentFactory(IndexComponent);
        // console.log(factory);
        // this.viewRef.createComponent(factory);
        console.log(this.data);
    }

}
