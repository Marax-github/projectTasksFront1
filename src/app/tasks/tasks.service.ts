import { Injectable } from "@angular/core";
import { NewTasks } from "./tasks.model";

@Injectable({providedIn: "root"})
export class TaskService {

  

    tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ]

      constructor(){

        const tasks = localStorage.getItem("tasks");

        if(tasks){
          this.tasks = JSON.parse(tasks);
        }

      }

      getUserTask(id: string){
        return this.tasks.filter((task) => task.userId === id )
      }

      completeTaskButton(id: string){
        this.tasks = this.tasks.filter((task) => task.id !== id)
        this.saveTask()
      }

      addingNewTask(data: NewTasks, userId: string){
        this.tasks.push({
          id: new Date().getTime.toString(),
          userId: userId,
          title: data.title,
          summary: data.summary,
          dueDate: data.dueDate
        })
        this.saveTask()
      }

      saveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
      }
}