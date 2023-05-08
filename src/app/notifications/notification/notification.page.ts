import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from '../notification';
import { NotificationsService } from 'src/app/notifications.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notification!: Notification;

  constructor(private routes: ActivatedRoute, private notificationsService: NotificationsService, private router: Router, private location: Location) { }

  ngOnInit() {
    this.routes.params.subscribe((params: any) => {
      this.notification = params;
    })
  }

  onMarkRead(){
    this.notificationsService.markReadNotification(this.notification.id).subscribe((result: any) => {
      if(result?.success){
        this.router.navigate(['/notifications']);
      }
    })
  }

  goBack(){
    this.location.back();
  }

}
