import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TasksComponent} from './tasks/tasks.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-algular-app';
  users = DUMMY_USERS;
  selectedUserId?:string;

  onSelectUser(id :string) {
    this.selectedUserId =id;
  }
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

}
