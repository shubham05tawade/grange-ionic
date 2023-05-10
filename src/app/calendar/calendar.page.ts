import { Component, OnInit } from '@angular/core';
import { Calendar } from './calendar';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  calendars: Calendar[] = [];

  constructor(private router: Router, private routes: ActivatedRoute, private calendarservice: CalendarService) { }

  ngOnInit() {
    this.routes.params.subscribe((param: any) => {
      this.calendars = [];
      this.calendarservice.getCalendar().subscribe((data: any) => {
        data.calendars.map((calendar: Calendar) => {
          this.calendars.push(calendar);
        })
      })
    })
  }

  goBack(){
    this.router.navigate(["/home"])
  }

  navigateToAddCalendar(){
    this.router.navigate(["/calendar/calendaradd"])

  }

}
