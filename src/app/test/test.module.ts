import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        TestComponent,
    ],
    declarations: [
        TestComponent,
    ],
    entryComponents: [
        TestComponent,
    ],
    providers: [
    ],
})
export class TestModule { }
