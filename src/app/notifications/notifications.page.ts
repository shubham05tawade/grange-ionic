import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { Notification } from './notification';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService, private router: Router, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.params.subscribe((param) => {
      this.notificationsService.fetchNotifications().subscribe((data: any) => {
        this.notifications = [];
        data.notifications.map((notification: Notification) => {
          this.notifications.push(notification);
        })
      })
    })
  }

  navigateToNotification(page: any){
    this.router.navigate(["/notifications/notification", this.notifications[page]])
  }

  goBack(){
    this.router.navigate(["/home"]);
  }

}
