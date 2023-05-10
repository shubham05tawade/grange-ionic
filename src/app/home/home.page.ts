import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assignment } from '../assignments/assignment';
import { AssignmentsService } from '../assignments.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  assignment!: Assignment;
  daysLeft: any;
  currentDate: any; diff: any; endDate: any;
  isEditDate = false;

  constructor(private router: Router, private routes: ActivatedRoute, private assignmentsService: AssignmentsService) {
  }

  openNotificationsPage(){
    this.router.navigate(["/notifications"])
  }

  ngOnInit(){
    this.routes.params.subscribe((param: any) => {
      this.isEditDate = false;
      this.assignmentsService.getLatestAssignment().subscribe((data:any) => {
        this.assignment = data?.assignments[0]
        this.currentDate = new Date();
        this.endDate = new Date(this.assignment.endDate);
        console.log(this.endDate)
        this.diff = Math.round((this.endDate -this.currentDate)/ (1000 * 60 * 60 * 24));
      })
    })
  }

  onEditDate(){
    this.isEditDate = !this.isEditDate;
  }

  onChangeAssignmentEndDate(date: any){
    this.assignment.endDate = date;
    this.endDate = date;
    console.log(date)
    this.assignmentsService.updateAssignmentEndDate(this.assignment.id, this.assignment?.endDate).subscribe((data:any) => {
      if(data.success){
        this.isEditDate =! this.isEditDate;
        this.currentDate = new Date();
        this.endDate = new Date(this.assignment.endDate);
        this.diff = Math.round((this.endDate -this.currentDate)/ (1000 * 60 * 60 * 24));
      }
    })
  }

}
