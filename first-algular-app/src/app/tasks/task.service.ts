import {DUMMY_TASKS, Task} from './task.module';
import {Injectable} from '@angular/core';
@Injectable({providedIn: 'root'})
export class TaskService{

  private tasks = DUMMY_TASKS;
  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }

  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(task: Task){
    this.tasks.unshift(task);
    this.saveTasks();
  }

  removeTask(taskId: string){
    this.tasks = this.tasks.filter((task)=> task.id !== taskId);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }


}
