import {Component, ElementRef, inject, viewChild} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {TasksService} from "../service/tasks.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private taskService: TasksService;

  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }

  onAddTask(title: string, description: string) {
    this.taskService.onAddTAsk({
      'title':title,
      'description':description
    });
    this.formEl()?.nativeElement.reset();
  }
}
