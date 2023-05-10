import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModulesService } from 'src/app/modules.service';
import { Module } from 'src/app/modules/module';
import { Calendar } from 'src/app/calendar/calendar'
import { CalendarService } from 'src/app/calendar.service';

@Component({
  selector: 'app-calendaradd',
  templateUrl: './calendaradd.page.html',
  styleUrls: ['./calendaradd.page.scss'],
})
export class CalendaraddPage implements OnInit {

  modules: Module[] =[];
  startTime = new Date().toTimeString().slice(0,8);
  endTime = new Date().toTimeString().slice(0,8);
  showDates = false;
  calendar: Calendar = {
    moduleId: 0,
    moduleName: "",
    startTime: "",
    endTime: ""
  }

  constructor(private modulesService: ModulesService, private routes: ActivatedRoute, private location: Location, private calendarService: CalendarService, private router: Router) { }

  ngOnInit() {
    this.routes.params.subscribe((param) => {
      this.modulesService.fetchModules().subscribe((data: any) => {
        data?.modules.map((module: Module) => {
          this.modules.push(module);
        })
      })
    })
  }

  goBack(){
    this.location.back();
  }

  onSelectModule(event: any){
    const id = (event.target.value).split("-")[2];
    this.calendar.moduleId = this.modules[id].moduleNo;
    this.calendar.moduleName = this.modules[id].moduleName;
    this.showDates = true;
  }

  onAddToSchedule(){
    this.calendar.startTime = this.startTime;
    this.calendar.endTime = this.endTime;
    this.calendarService.addCalendar(this.calendar).subscribe((data:any) => {
      if(data.success){
        this.router.navigate(["/calendar"])
      }
    })
  }


}
