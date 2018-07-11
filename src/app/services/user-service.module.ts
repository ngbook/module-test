
import { NgModule } from '@angular/core';
import { UserService } from './user.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
    providers: [
        UserService,
    ]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [
                UserService
            ]
        };
    }
}
