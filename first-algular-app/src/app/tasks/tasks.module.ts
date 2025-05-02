import {NgModule} from '@angular/core';
import {TasksComponent} from './tasks.component';
import {NewTaskComponent} from './new-task/new-task.component';
import {TaskComponent} from './task/task.component';
import {DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [DatePipe, FormsModule],
})
export class TasksModule {
}
