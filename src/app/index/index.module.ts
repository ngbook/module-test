import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../services/user-service.module';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    imports: [
        CommonModule,
        // UserModule,
        RouterModule.forChild([{
            path: '',
            component: IndexComponent
        }])
    ],
    exports: [
        // IndexComponent,
    ],
    declarations: [
        IndexComponent,
    ],
    providers: [
        {provide: 'a', useValue: 'index'}
    ]
})
export class IndexModule {
}
