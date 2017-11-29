import {
    Component, OnInit, Inject,
} from '@angular/core';
import { UserModel } from '../services/user';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    providers: [
    ]
})
export class TestComponent implements OnInit {

    constructor(private user: UserModel) { }

    ngOnInit() {
        console.log('[Test] user model is:', this.user.name);
    }

}
