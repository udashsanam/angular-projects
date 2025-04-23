import {Component, Input} from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DUMMY_TASKS} from './task.module';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone:true
})
export class TasksComponent {
  @Input({required:true}) userId !:string;
  @Input({required: true}) name?:string;
  tasks = DUMMY_TASKS;

  get  selectedUserTasks(){
    console.log(this.userId);
    return this.tasks.filter((task) => this.userId === task.userId);
  }
}
