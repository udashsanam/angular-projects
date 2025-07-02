import {Component, inject, signal} from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import {TasksService} from "../service/tasks.service";

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  selectedFilter = signal<string>('all');
  private tTaskService: TasksService = inject(TasksService);
  tasks = this.tTaskService.allTasks;

  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

}
