import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { UserService } from '../services/user.service';
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
        UserService,
        {provide: 'a', useValue: 'value-in-test-mod'}
    ],
})
export class TestModule { }
