import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModulesService {

  configUrl = ""
  constructor(private http: HttpClient) {
    this.configUrl = "http://localhost:8080/php_ionic/json-data-modules.php"
  }

  fetchModules(){
    return this.http.get(this.configUrl)
  }
}
