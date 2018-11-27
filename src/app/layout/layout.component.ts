import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    constructor(private http: HttpClient, private router: Router) { }
    //data =any;

    ngOnInit() {
      let httpOptions = {
        headers: new HttpHeaders({ 'Authorization': localStorage.getItem('jwtToken') })
      };
      this.http.get('/api/dashboard', httpOptions).subscribe(res => {
        console.log("welcome....");
      //  this.data = res;
        console.log(res);
      }, err => {
        if(err.status === 401) {
          this.router.navigate(['login']);
        }
      });
    }

    logout() {
      localStorage.removeItem('jwtToken');
      this.router.navigate(['login']);
    }
}
