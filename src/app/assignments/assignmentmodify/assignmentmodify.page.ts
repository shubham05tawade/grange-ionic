import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { getDownloadURL } from '@angular/fire/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/assignments.service';
import { FirestoreService } from 'src/app/firestore.service';


@Component({
  selector: 'app-assignmentmodify',
  templateUrl: './assignmentmodify.page.html',
  styleUrls: ['./assignmentmodify.page.scss'],
})
export class AssignmentmodifyPage implements OnInit {

  isAlertOpen = false;
  result = "";
  public alertButtons = ['OK'];

  id = "";
  assignment = "";
  files: any = [];
  module = "";
  startDate = null;
  endDate = null;
  description = "";
  resources = "";

  constructor(public fireStoreService: FirestoreService, private assignmentsService: AssignmentsService, private router: Router, private route: ActivatedRoute, private location: Location) {
   }

  ngOnInit() {
    this.route.params.subscribe((data: any) => {
      this.id = data.id;
      this.assignment = data.name;
      this.module = data.module;
      this.startDate = data.startDate;
      this.endDate = data.endDate;
      this.description = data.description;
    })
  }

  showError(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  onModifyAssignment(){
    if(this.assignment != "" && this.module != "" && this.startDate != null && this.endDate != null && this.description != ""){
      this.assignmentsService.modifyAssignments({
        id: Number(this.id),
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
