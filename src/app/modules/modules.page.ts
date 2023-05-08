import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Module} from './module';
import { ModulesService } from '../modules.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {

  modules: Module[] = [];
  imageLink : string = "https://ui-avatars.com/api/?background=random&";

  constructor(private router: Router,  private moduleService: ModulesService, private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.params.subscribe((param) => {
      this.modules = []
      this.moduleService.fetchModules().subscribe((data: any) => data.modules.map((module: Module) => {
        this.modules.push(module)
      }));
    })
  }

  navigateToModule(page: any){
    this.router.navigate(['/modules/module', this.modules[page]]);
  }

  goBack(){
    this.router.navigate(['home']);
  }

  onImageLoad(page: any, event: any){
    event.target.src = this.moduleService.getModuleImage(this.modules[page]?.moduleName);
  }

}
