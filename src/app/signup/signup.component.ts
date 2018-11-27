import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

constructor(private http: HttpClient, private router: Router) { }
signupData = { username:'', password:'' };
message = '';

  ngOnInit() {
  }
  signup() {
  this.http.post('/api/signup',this.signupData).subscribe(resp => {
    console.log(resp);
    this.router.navigate(['login']);
  }, err => {
    this.message = err.error.msg;
  });
}

}
