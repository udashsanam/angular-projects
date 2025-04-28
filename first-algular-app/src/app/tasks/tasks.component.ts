import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS, Task} from './task.module';
import {NewTaskComponent} from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent, NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone:true
})
export class TasksComponent {
  @Input({required:true}) userId !:string;
  @Input({required: true}) name?:string;
  @Input() isAddingNewTask:boolean = false;
  tasks = DUMMY_TASKS;

  get  selectedUserTasks(){
    return this.tasks.filter((task) => this.userId === task.userId);
  }

  onCompleteTask(id: string){
    console.log(id);
    this.tasks = this.tasks.filter((task) => task.id !==id);
  }

  onStartAddTask(){
    this.isAddingNewTask=this.isAddingNewTask?false:true;
  }

  onCancelAddTask(){
    this.isAddingNewTask = false;
    console.log("cancel")
  }

  onAddTask(task: Task){
    task.id = new Date().getTime().toString();
    task.userId = this.userId;
    this.tasks.unshift(task);
    this.isAddingNewTask =false;
  }


}
