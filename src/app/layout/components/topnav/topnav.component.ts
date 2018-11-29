import { Component, OnInit,Input } from '@angular/core';
import { Router } from "@angular/router";


@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

   constructor( private router: Router) { }

   username: String;

    ngOnInit() {
      this.username = localStorage.getItem("username");
  }
  onLoggedout(){
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    this.router.navigate(['login']);

  }

}
