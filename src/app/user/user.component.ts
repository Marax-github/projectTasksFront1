import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  @Input({required:true}) user!: User;
  @Output() select = new EventEmitter();
  imgPath!: string;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.userService.setUser(this.user)
    this.imgPath = this.userService.imgPath
  }

  onSelectedUser(){
    this.select.emit(this.user.id)
  }


}
