import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModulesList } from './preload';
import { NotFoundComponent } from './not-found/not-found.component';
// import { IndexComponent } from './index/index.component';

const ROUTES: Routes = [
    {
        path: 'index',
        loadChildren: 'app/index/index.module#IndexModule',
        // component: IndexComponent,
    // }, {
    //     path: 'test',
    //     loadChildren: 'app/test/test.module#TestModule',
    }, {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }, {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            useHash: true,
            preloadingStrategy: PreloadSelectedModulesList,
            // enableTracing: true // for debugging.
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
