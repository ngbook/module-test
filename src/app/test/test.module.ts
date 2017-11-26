import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
// import { IndexComponent } from '../index/index.component';

@NgModule({
    imports: [
        CommonModule,
        // RouterModule.forChild([{
        //     path: '',
        //     component: TestComponent
        // }])
    ],
    exports: [
        TestComponent,
    ],
    declarations: [
        TestComponent,
        // IndexComponent,
    ],
    entryComponents: [
        // IndexComponent,
    ],
    providers: [
        UserService,
        {provide: 'a', useValue: 'test'}
    ],
})
export class TestModule { }
