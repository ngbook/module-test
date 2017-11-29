import { OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
export declare class IndexComponent implements OnInit {
    private user;
    private data;
    constructor(user: UserService, data: any);
    ngOnInit(): void;
}
