import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import {User} from './user.model';

const  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  standalone:false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  @Input({required: true}) user!:User;
  @Input({required: true}) selected !:boolean;
 @Output() selectedUser = new EventEmitter();
 // selectedUser = output<string>();

  // this is not working
  // avatar = input.required <string>();
  // name = input.required<string>();

  onSelectUser(){
    console.log(this.selected);
    this.selectedUser.emit(this.user.id);
  }
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar;
  // })
}
