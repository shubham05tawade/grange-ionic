import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../notifications.service';
import { Notification } from './notification';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  notifications: Notification[] = [];

  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.notificationsService.fetchNotifications().subscribe((data: any) => {
      data.notifications.map((notification: Notification) => {
        this.notifications.push(notification);
      })
    })
  }

  navigateToNotification(page: any){
  }

}
