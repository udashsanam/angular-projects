import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../shared/button/button.component";
import {ControlComponent} from "../../../shared/control/control.component";

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

}
