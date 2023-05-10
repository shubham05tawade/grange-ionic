import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TasksService {

  configUrl = "";

  constructor(private httpClient: HttpClient) { 
    this.configUrl = "http://localhost:8080/php_ionic/"
  }

  getTask(){
    return this.httpClient.get(this.configUrl + "json-data-task.php")
  }

  finishTask(tasks: any){
    return this.httpClient.put(this.configUrl + "json-update-task.php", tasks)
  }

  addTask(task: string){
    return this.httpClient.post(this.configUrl + "json-create-task.php", {task: task});
  }
}
