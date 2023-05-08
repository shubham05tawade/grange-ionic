import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  configUrl = ""
  name = ""
  constructor(private http: HttpClient) {
    this.configUrl = "http://localhost:8080/php_ionic/json-data-modules.php"
  }

  fetchModules(){
    return this.http.get(this.configUrl)
  }

  getModuleImage(name: string){
    this.name = name.replace(" ","+");
    return "https://ui-avatars.com/api/?name="+this.name+"&background=random&size=70"
  }
}
