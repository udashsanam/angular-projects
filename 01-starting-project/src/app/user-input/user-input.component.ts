import {Component, EventEmitter, output, Output, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {UserInputData} from "../model/AnnaulData";
import {InvestmentService} from "../service/investment-service";

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

   constructor (private  investmentService: InvestmentService) {}


  onSubmit() {
    console.log('Submitted');
    this.investmentService.calculateInvestmentResults({
      annualInvestment:this.enteredAnnualInvestment,
      initialInvestment:this.enteredInitialInvestment,
      expectedReturn:this.enteredExpectedReturn(),
      duration:this.enteredDuration()
    });
    this.enteredInitialInvestment = 0;
    this.enteredAnnualInvestment = 0;
    this.enteredExpectedReturn.set(5);
    this.enteredDuration.set(10);
  }
}
