import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignment';
import { AssignmentsService } from 'src/app/assignments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.page.html',
  styleUrls: ['./assignment.page.scss'],
})
export class AssignmentPage implements OnInit {

  assignment!: Assignment;

  constructor(private routes: ActivatedRoute, private router: Router, private assignmentsSerice: AssignmentsService, private location: Location) {
   }

  ngOnInit() {
    this.routes.params.subscribe((data: any) => (this.assignment = data))  
  }

  navigateToEditAssignment(){
    this.router.navigate(['assignments/assignment/assignmentmodify', this.assignment]);
  }

  deleteAssignment(){
    this.assignmentsSerice.deleteAssignment(this.assignment.id).subscribe((data: any) => {
      if(data?.success){
        this.router.navigate(["/assignments"])
      }
    })
  }

  goBack(){
    this.location.back();
  }

}
