import { Component, Input } from '@angular/core';
import { Task } from '../tasks.model';
import { TaskService } from '../tasks.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-task',
  standalone: false,
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: Task;
  

  constructor(private taskService:TaskService){}

  completeTaskButton(){
    this.taskService.completeTaskButton(this.task.id)
  }

}
