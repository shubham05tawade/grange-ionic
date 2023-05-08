import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Module } from '../module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-module',
  templateUrl: './module.page.html',
  styleUrls: ['./module.page.scss'],
})
export class ModulePage implements OnInit {

  module: Module | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { 
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => (this.module = params))
  }

  onNavigate(){
    if(this.module!== undefined){
      this.router.navigate(["modules/module/navigate", {lat: this.module.lat, long: this.module.long}])
    }
  }

  goBack(){
    this.location.back();
  }

}
