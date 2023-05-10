import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  configUrl = "";

  constructor(private httpClient: HttpClient) { 
    this.configUrl = "http://localhost:8080/php_ionic/"
  }

  getCalendar(){
    return this.httpClient.get(this.configUrl+"json-data-calendar.php")
  }

  addCalendar(calendar: any){
    return this.httpClient.post(this.configUrl+"json-create-calendar.php", calendar)
  }
}
