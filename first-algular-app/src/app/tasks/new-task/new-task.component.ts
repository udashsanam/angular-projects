import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../user/user.model';
import {UserComponent} from '../../user/user.component';
import {Task} from '../task.module';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
  standalone:true
})
export class NewTaskComponent {

  @Output() cancel  = new EventEmitter<void>();
  @Output() add = new EventEmitter<Task>();
  enteredTitle = signal('');
  enteredSummary=signal('');
  enteredDate = signal('');


  onCancelTaskAdd() {
    this.cancel.emit();
  }
  onSubmit(){
    this.add.emit({
      id: '',
      userId: '',
      title:this.enteredTitle(),
      dueDate: this.enteredDate(),
      summary : this.enteredSummary()
    });
  }
}
