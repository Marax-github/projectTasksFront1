import { Component, Input } from '@angular/core';
import { Task } from '../tasks.model';

@Component({
  selector: 'app-task',
  standalone: false,
  
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task!: Task;

  completeButton(){
    
  }
}
