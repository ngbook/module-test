import { Component, Inject } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private user: UserService, @Inject('a') data) {
        this.user.id = 100;
        console.log('set user id at app');
    }
}
