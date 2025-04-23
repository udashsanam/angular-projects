import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  standalone:true
})
export class TasksComponent {
  @Input({required: true}) name?:string;

}
