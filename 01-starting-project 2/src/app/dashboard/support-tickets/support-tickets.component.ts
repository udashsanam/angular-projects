import { Component } from '@angular/core';
import {NewTicketsComponent} from "./new-tickets/new-tickets.component";
import {Ticket} from "./ticket.model";
import {TicketComponent} from "./ticket/ticket.component";

@Component({
  selector: 'app-support-tickets',
  standalone: true,
  imports: [NewTicketsComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css'
})
export class SupportTicketsComponent {

  tickets: Ticket[] =[];

  onAdd( ticketData: {title: string; text: string}) {
    const ticket: Ticket = {
      title:ticketData.title,
      request: ticketData.text,
      id:Math.random().toString(),
      status: 'open'
    }
    console.log(ticket);
    this.tickets.push(ticket);
  }

  conCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id) {
        // returning all the previous value but change one parameter status with closed
        // javascript value
        return {...ticket, status: 'closed'};
      }
      return ticket;
    });
  }
}
