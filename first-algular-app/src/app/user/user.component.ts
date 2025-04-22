import {Component, computed, input, Input, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';

const  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  standalone:true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

 @Input({required:true}) avatar!: string;
 @Input({required: true}) name!:string;

  // this is not working
  // avatar = input.required <string>();
  // name = input.required<string>();

  onSelectUser(){

  }
  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }
  imagePath = computed(()=> {
    return 'assets/users/' + this.avatar;
  })
}
