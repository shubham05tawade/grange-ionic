import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Module} from './module';
import { ModulesService } from '../modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

  modules: Module[] = [];

  constructor(private router: Router,  private moduleService: ModulesService) {
  }

  ngOnInit() {
    this.moduleService.fetchModules().subscribe((data: any) => data.modules.map((module: Module) => {
      this.modules.push(module)
    }));
  }

  navigateToModule(event: any){
    this.router.navigate(['/modules/module', this.modules[event?.pointerId - 2]]);
  }

}
