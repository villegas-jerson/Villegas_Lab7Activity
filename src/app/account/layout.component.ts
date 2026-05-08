import {Component} from '@angular/core';
import {Router } from '@angular/router';

import { AccountService } from '@app/_services';

@Component({ selector: 'app-account-layout', templateUrl: 'layout.component.html', standalone: false })
export class AccountLayoutComponent {
    constructor(
        private router: Router,
        private accountService: AccountService
    ) {
        if (this.accountService.userValue) {
            this.router.navigate(['/']);
        }
    }
} 