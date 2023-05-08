import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { AssignmentsService } from 'src/app/assignments.service';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-assignmentadd',
  templateUrl: './assignmentadd.page.html',
  styleUrls: ['./assignmentadd.page.scss'],
})
export class AssignmentaddPage implements OnInit {

  isAlertOpen = false;
  result = "";
  public alertButtons = ['OK'];

  assignment = "";
  files: any = [];
  module = "";
  startDate = null;
  endDate = null;
  description = "";
  resources = "";

  constructor(public fireStoreService: FirestoreService, private assignmentsService: AssignmentsService, private router: Router, private location: Location) {
   }

  ngOnInit() {
  }

  showError(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  onSaveAssignment(){
    if(this.assignment != "" && this.module != "" && this.startDate != null && this.endDate != null && this.description != ""){
      console.log(this.startDate)
      this.assignmentsService.addAssignments({
        id: 0,
        name: this.assignment,
        module: this.module,
        description: this.description,
        startDate: this.startDate,
        endDate: this.endDate,
        resources: this.resources
      }).subscribe((data: any) => {
        if(data?.success){
          this.assignment = "";
          this.module = "";
          this.startDate = null;
          this.endDate = null;
          this.description = "";
          this.resources = "";
          this.showError(false);
          this.router.navigate(["/assignments"]);
        }
      })
    }
    else{
      this.showError(true);
    }
  }

  async onUploadFile(event: any){
    this.files.push(event.addedFiles);
    const result = await this.fireStoreService.uploadFile(event.addedFiles[0]);
    getDownloadURL(result.ref).then((url) => {
      this.resources = url;
    })
    
  }

  goBack(){
    this.location.back();
  }

}


