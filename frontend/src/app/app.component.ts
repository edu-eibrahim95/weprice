import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router,  Event} from "@angular/router";
import {User} from "./Models/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  noHeader  : boolean;
  user : User;
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd ) {
        let currentUrl = event.url;
        if(currentUrl.includes('register') || currentUrl.includes('login')){
          this.noHeader = true;
        }
      }
    });
    if (localStorage.getItem('currentUser')){
      this.user = JSON.parse(localStorage.getItem('currentUser'));
    }
  }
  logout() {
    localStorage.removeItem('currentUser');
    location.reload();
  }
}
