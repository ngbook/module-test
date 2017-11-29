import {
    NgModule,
    ModuleWithProviders,
    InjectionToken,
} from '@angular/core';

export class UserModel {
    id: number;
    name: string;
}
export class UserModelA extends UserModel {
    name = 'user-type-A';
}

export class UserModelB extends UserModel {
    name = 'user-type-B';
}

@NgModule({
    providers: [
        // UserModelA,
        // UserModelB,
    ]
})
export class UserModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [{
                provide: UserModel,
                useClass: UserModelA
            }]
        };
    }
    static forChild(): ModuleWithProviders {
        return {
            ngModule: UserModule,
            providers: [{
                provide: UserModel,
                useClass: UserModelB
            }]
        };
    }
}
