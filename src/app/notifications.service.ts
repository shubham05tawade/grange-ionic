import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  configUrl = ""
  constructor(private http: HttpClient) {
    this.configUrl = "http://localhost:8080/php_ionic/"
  }

  fetchNotifications(){
    return this.http.get(this.configUrl+"json-data-notification.php")
  }

  markReadNotification(id: any){
    return this.http.put(this.configUrl+"json-update-notification.php", {id: id});
  }
}
