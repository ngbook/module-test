import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ɵmpd } from '@angular/core';

import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { AppRoutingModule } from './app-routing.module';
import { PreloadSelectedModulesList } from './preload';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './services/user';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        TestModule,
        AppRoutingModule,
        UserModule.forRoot(),
    ],
    providers: [
        PreloadSelectedModulesList,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
