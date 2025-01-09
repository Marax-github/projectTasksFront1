import { Component, Input } from '@angular/core';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  @Input({required:true}) name!: string;


  constructor(private userService: UserService){}

  

}
