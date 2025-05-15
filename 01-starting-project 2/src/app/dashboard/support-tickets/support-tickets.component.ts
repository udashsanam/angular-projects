import { Component } from '@angular/core';
import {NewTicketsComponent} from "./new-tickets/new-tickets.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketsComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

}
