import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable({providedIn: "root"})
export class UserService {

    private selectUser!: User;

    setUser(user: User){
        this.selectUser = user;
    }

    get imgPath(){
        return this.selectUser ? `users/${this.selectUser.avatar}` : "";
    }

}