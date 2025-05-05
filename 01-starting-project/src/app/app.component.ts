import {Component, Input} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {DataTableComponent} from "./data-table/data-table.component";
import {AnnaulData, UserInputData} from "./model/AnnaulData";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    DataTableComponent
  ]
})
export class AppComponent {

  @Input() userInputData!: UserInputData;
  investmentResults: AnnaulData[] = [];

   calculateInvestmentResults(data: UserInputData ) {
    const annualData:AnnaulData[] = [];
    let investmentValue = data.initialInvestment;

    for (let i = 0; i < data.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (data.expectedReturn / 100);
      investmentValue += interestEarnedInYear + data.annualInvestment;
      const totalInterest =
        investmentValue - data.annualInvestment * year - data.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: data.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: data.initialInvestment + data.annualInvestment * year,
      });
    }

    return annualData;
  }

  onInput(inputData: UserInputData) {
     this.investmentResults = this.calculateInvestmentResults(inputData);
     console.log(this.investmentResults);
  }
}
