import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports-container',
  templateUrl: './reports-container.component.html',
  styleUrls: ['./reports-container.component.scss']
})
export class ReportsContainerComponent implements OnInit {

  public filters: any = {};

  public filterOptions = {
    dateRange: true,
    stateSelect: true,
    citySelect: true,
    storeNumber: true,
    alarmTypesSelect: true,
    recommendationsSelect: true,
  };

  public applyFilterEvent(value: any) {
    console.log('selectedFilters', value);
    this.filters = value;

  }


  constructor() { }

  ngOnInit() {
  }

}
