import {Component, input, Input} from '@angular/core';
import {AnnaulData} from "../model/AnnaulData";
import {CurrencyPipe} from "@angular/common";

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

   tableData = input<AnnaulData[]>();

}
