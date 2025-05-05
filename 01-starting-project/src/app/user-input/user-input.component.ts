import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputData} from "../model/AnnaulData";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

   enteredInitialInvestment:number= 0;
   enteredAnnualInvestment:number = 0;
   enteredExpectedReturn = signal(5);
   enteredDuration = signal(10);
   @Output() input  = new EventEmitter<UserInputData>();


  onSubmit() {
    console.log('Submitted');
    this.input.emit({
      annualInvestment:this.enteredAnnualInvestment,
      initialInvestment:this.enteredInitialInvestment,
      expectedReturn:this.enteredExpectedReturn(),
      duration:this.enteredDuration()
    });
  }
}
