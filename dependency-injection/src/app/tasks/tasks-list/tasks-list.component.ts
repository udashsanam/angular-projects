import {Component, inject, signal} from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import {TasksService} from "../service/tasks.service";
import {TASK_STATUS_OPTIONS, taskStatusOptionProvider, TaskStatusOptions} from "../task.model";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
  providers:[
    taskStatusOptionProvider
  ]
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tTaskService: TasksService = inject(TasksService);
  tasks = this.tTaskService.allTasks;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

}
