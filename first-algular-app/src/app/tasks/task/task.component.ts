import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Task} from '../task.module';
import {DatePipe} from '@angular/common';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task',
  imports: [
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: true
})
export class TaskComponent {
  @Input({required:true}) task!: Task;
  @Output() complete = new EventEmitter<string>();

  constructor(private taskService: TaskService) {

  }


  onCompleteTasK(){
    this.taskService.removeTask(this.task.id);
  }

}
