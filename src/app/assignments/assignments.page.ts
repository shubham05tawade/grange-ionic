import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../assignments.service';
import { Assignment } from './assignment';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.page.html',
  styleUrls: ['./assignments.page.scss'],
})
export class AssignmentsPage implements OnInit {

  assignments: Assignment[];

  constructor(private assignmentsService: AssignmentsService, private router: Router, private routes: ActivatedRoute) {
    this.assignments = [];
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.assignments = [];
      this.assignmentsService.fetchAssignments().subscribe((data: any) => data?.assignments?.map((assignment: Assignment) => {
        this.assignments.push(assignment);
      }));
    })
  }

  navigateToAssignmentDetail(page: number){
    this.router.navigate(['/assignments/assignment', this.assignments[page]])
  }

  navigateToAddAssignment(){
    this.router.navigate(['/assignments/assignmentadd']);
  }

  goBack(){
    this.router.navigate(["/home"]);
  }
}
