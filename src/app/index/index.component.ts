import { Component, OnInit, Inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {

    constructor(private user: UserService, @Inject('a')private data) { }

    ngOnInit() {
        console.log('get user id at index:', this.user.id);
        console.log(this.data);
        console.log('setting inside index');
        this.user.id = 55;
    }

}
