import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵmpd } from '@angular/core';

// import { UserService } from './services/user.service';
import { AppComponent } from './app.component';
// import { IndexModule } from './index/index.module';
import { TestModule } from './test/test.module';
// import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { PreloadSelectedModulesList } from './preload';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        // IndexComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        // IndexModule,
        TestModule,
        AppRoutingModule,
    ],
    entryComponents: [
        // IndexComponent
    ],
    providers: [
        PreloadSelectedModulesList,
        {provide: 'a', useValue: 'app'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
