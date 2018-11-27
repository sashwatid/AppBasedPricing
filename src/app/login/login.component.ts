import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private http: HttpClient, private router: Router) {}
    loginData = { username:'', password:'' };
    message = '';
    data: any;
    ngOnInit() {}

    login() {
        this.http.post('/api/signin',this.loginData).subscribe(resp => {
        this.data = resp;
        localStorage.setItem('jwtToken', this.data.token);
        this.router.navigate(['/appPricing']);
      }, err => {
        this.message = err.error.msg;
      });
    }
}
