import { Component, Inject } from '@angular/core';
import { UserModel } from './services/user';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private user: UserModel) {
        console.log('[App] user model is:', this.user.name);
    }
}
