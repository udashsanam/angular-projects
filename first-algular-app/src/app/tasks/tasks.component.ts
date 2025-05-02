import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS, Task} from './task.module';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskService} from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone:false
})
export class TasksComponent {
  @Input({required:true}) userId !:string;
  @Input({required: true}) name?:string;
  @Input() isAddingNewTask:boolean = false;
  tasks = DUMMY_TASKS;
  constructor(private taskService: TaskService) {
  }
  get  selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }



  onStartAddTask(){
    this.isAddingNewTask=this.isAddingNewTask?false:true;
  }

  onCloseAddTask(){
    this.isAddingNewTask = false;
    console.log("cancel")
  }

  onAddTask(task: Task){
    task.id = new Date().getTime().toString();
    task.userId = this.userId;
    this.taskService.addTask(task);
    this.isAddingNewTask =false;
  }


}
