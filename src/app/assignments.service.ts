import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Assignment } from './assignments/assignment';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  configUrl = ""
  constructor(private http: HttpClient) {
    this.configUrl = "http://localhost:8080/php_ionic/"
  }

  fetchAssignments(){
    return this.http.get(this.configUrl+"json-data-assignment.php")
  }

  deleteAssignment(id: number){
    return this.http.delete(this.configUrl+"json-delete-assignment.php",{ body: { id }});
  }

  addAssignments(assignment: Assignment){
    return this.http.post(this.configUrl+"json-create-assignment.php", assignment)
  }

  modifyAssignments(assignment: Assignment){
    return this.http.put(this.configUrl+"json-update-assignment.php", assignment)
  }

  getLatestAssignment(){
    return this.http.get(this.configUrl+"json-latest-assignment.php")
  }

  updateAssignmentEndDate(id:any, endDate:any){
    return this.http.put(this.configUrl+"json-update-date-assignment.php", {id: id, endDate: endDate})
  }
}
