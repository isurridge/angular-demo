import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-executive-summary-status-tables',
  templateUrl: './executive-summary-status-tables.component.html',
  styleUrls: ['./executive-summary-status-tables.component.scss']
})
export class ExecutiveSummaryStatusTablesComponent implements OnInit {

  @Input() status: any;
  @Input() statusType: any;



  constructor() {
  }

  ngOnInit() {
  }

}
