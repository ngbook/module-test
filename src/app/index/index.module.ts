import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule } from '@angular/router';
import { UserModule } from '../services/user';

@NgModule({
    imports: [
        CommonModule,
        UserModule.forChild(),
        RouterModule.forChild([{
            path: '',
            component: IndexComponent
        }])
    ],
    declarations: [
        IndexComponent,
    ],
})
export class IndexModule {
}
