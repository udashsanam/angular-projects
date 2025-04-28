import {DUMMY_TASKS, Task} from './task.module';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class TaskService{

  private tasks = DUMMY_TASKS;


  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task){
    this.tasks.unshift(task);
  }

  removeTask(taskId: string){
    this.tasks = this.tasks.filter((task)=> task.id !== taskId);
  }

}
