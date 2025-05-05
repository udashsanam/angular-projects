import {Component, input, Input} from '@angular/core';
import {AnnaulData} from "../model/AnnaulData";
import {CurrencyPipe} from "@angular/common";
import {InvestmentService} from "../service/investment-service";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {


   constructor(private investmenService: InvestmentService) {}

    get investmentData() {
     return this.investmenService.data;
    }

}
