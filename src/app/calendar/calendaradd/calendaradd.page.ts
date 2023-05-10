import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModulesService } from 'src/app/modules.service';
import { Module } from 'src/app/modules/module';

@Component({
  selector: 'app-calendaradd',
  templateUrl: './calendaradd.page.html',
  styleUrls: ['./calendaradd.page.scss'],
})
export class CalendaraddPage implements OnInit {

  modules: Module[] =[];

  constructor(private modulesService: ModulesService, private routes: ActivatedRoute, private location: Location) { }

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

}
