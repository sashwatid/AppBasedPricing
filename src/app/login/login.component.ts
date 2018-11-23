import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private api: AppService) {}

    ngOnInit() {}

    onLogin() {
      this.api.getAttributes();
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['/dashboard']);
    }
}
