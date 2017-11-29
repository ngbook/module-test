import { Component, OnInit, Inject } from '@angular/core';
import { UserModel } from '../services/user';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

    constructor(
        private user: UserModel
    ) { }

    ngOnInit() {
        console.log('[Index] user model is:', this.user.name);
    }

}
