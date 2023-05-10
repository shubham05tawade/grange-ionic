import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../tasks.service';
import { Task } from './task'
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks: Task[] = [];
  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  task: string;

  constructor(private routes: ActivatedRoute, private router: Router, private tasksService: TasksService) { 
    this.task = ""
  }

  ngOnInit() {
    this.routes.params.subscribe((param: any) => {
      this.tasks = [];
      this.tasksService.getTask().subscribe((data: any) => {
        data?.tasks.map((task: Task) => {
          this.tasks.push(task)
        })
      })
    })
  }

  navigateToAddTask(){
    this.router.navigate(["/tasks/task"]);
  }

  markTaskFinish(pos: number, event:any){
    if(event.detail.checked){
      this.tasks[pos].finished = 1;
      this.tasksService.finishTask(this.tasks[pos]).subscribe((data) => {
      })
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.task, 'confirm');
    if(this.task!=""){
      this.tasksService.addTask(this.task).subscribe((data: any) => {
        if(data?.success){
          this.tasksService.getTask().subscribe((data: any) => {
            this.tasks = []
            data?.tasks?.map((task: Task) => {
              this.tasks.push(task);
            })
          })
        }
      })
    }
  }

  goBack(){
    this.router.navigate(["/home"]);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
    }
  }
}
