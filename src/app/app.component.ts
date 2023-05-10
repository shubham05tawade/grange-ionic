import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface MenuItem {
  title: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  showMenu = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showMenu = event.url !== '/';
      }
    });
  }

  appPages: MenuItem[] = [{
    title: 'Home',
    url: '/home'
  },{
    title: 'Notifications',
    url: '/notifications'
  },{
    title: 'Assignments',
    url: '/assignments'
  },{
    title: 'Modules',
    url: '/modules'
  }, {
    title: 'Tasks',
    url: '/tasks'
  }, {
    title: 'Calendar',
    url: '/calendar'
  }, {
    title: 'Log out',
    url: '/login'
  }]

  navigateToHome(){
    this.router.navigate(['/home'])
  }
  ngOnInit(){
  }
}
