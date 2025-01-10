import { Component, Input } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name!: string;
  @Input({required:true}) userId!: string;


  constructor(private taskService: TaskService){}


  // getTasks(){
  //   return this.taskService.tasks
  // }

    getUserTasks(){
       return this.taskService.getUserTask(this.userId)
    }
  

}
