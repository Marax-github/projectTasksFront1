import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>()
  @Input({required:true}) userId!: string;
  
  constructor(private taskService: TaskService){}

  enterTitle!: string;
  enterSummary!: string;
  enterDate!: string;

  addingNewTas(){
    this.taskService.addingNewTask({
      title: this.enterTitle,
      summary: this.enterSummary,
      dueDate: this.enterDate
    },
    this.userId
  )
  this.cancelButton()
  }

  cancelButton(){
    this.cancel.emit()
  }

}
