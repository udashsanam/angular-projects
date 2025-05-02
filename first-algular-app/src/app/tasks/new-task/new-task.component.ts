import {Component, EventEmitter, inject, Input, Output, signal} from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone:false
})
export class NewTaskComponent {

  @Output() close  = new EventEmitter<void>();
  // @Output() add = new EventEmitter<Task>();
  @Input({required:true})  userId!: string;
  enteredTitle = signal('');
  enteredSummary=signal('');
  enteredDate = signal('');

  private taskService = inject(TaskService);


  onCancelTaskAdd() {
    this.close.emit();
  }
  onSubmit(){
    this.taskService.addTask({
      id: new Date().getTime().toString() ,
      userId:  this.userId,
      title:this.enteredTitle(),
      dueDate: this.enteredDate(),
      summary : this.enteredSummary()
    });
    this.close.emit();
  }
}
