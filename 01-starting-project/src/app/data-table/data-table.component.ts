import {Component, Input} from '@angular/core';
import {AnnaulData} from "../model/AnnaulData";

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {

  @Input({required:true}) tableData: AnnaulData[] = [];

}
