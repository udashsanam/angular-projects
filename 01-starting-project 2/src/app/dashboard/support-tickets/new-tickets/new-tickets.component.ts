import {Component, ElementRef, EventEmitter, output, Output, viewChild, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";
import {elementAt} from "rxjs";

@Component({
  selector: 'app-new-tickets',
  standalone: true,
  imports: [
    FormsModule,
    ButtonComponent,
    ControlComponent
  ],
  templateUrl: './new-tickets.component.html',
  styleUrl: './new-tickets.component.css'
})
export class NewTicketsComponent {
// @ViewChild('form') form ?: ElementRef<HTMLFormElement>;
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  @ViewChildren(ControlComponent) controls!: ElementRef<HTMLInputElement>[];

  // @Output() add = new EventEmitter();
  add = output<{title:string; text: string}>();
  onSubmit(title:string, request:string) {
    console.log('Submitted');
    console.log(title);
    console.log(request);
    this.form().nativeElement.reset();
    console.log(this.controls);
    this.add.emit({
      title:title,
      text:request
    });
    this.form()?.nativeElement.reset();
  }

}
