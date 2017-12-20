import { Component, OnInit } from '@angular/core';
import { ExecutiveSummaryService } from "../../../common/services/executive-summary.service";
import { FiltersService, EXECUTIVE_SUMMARY_FILTERS_KEY } from '../../../common/services/filters.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-executive-summary-container',
  templateUrl: './executive-summary-container.component.html',
  styleUrls: ['./executive-summary-container.component.scss'],
  providers: [ExecutiveSummaryService, FiltersService]
})
export class ExecutiveSummaryContainerComponent implements OnInit {
  public options$: Observable<any>;
  public status$: Observable<any>;
  public meter$: Observable<any>;
  public filters: any = {};
  public filterOptions = {
    storeNumber: true,
    stateSelect: true,
    citySelect: true,
    dateRange: true
  };

  constructor(private executiveSummaryService: ExecutiveSummaryService,
              private filtersService: FiltersService) {

  }

  ngOnInit() {
    this.options$ = this.executiveSummaryService.chartData$;
    this.status$ = this.executiveSummaryService.statusData$;
    this.meter$ = this.executiveSummaryService.meterData$;

    this.executiveSummaryService.getLineChartData();
    this.executiveSummaryService.getStatusTablesData();
    this.executiveSummaryService.getHealthMeterData();
    this.filters = this.filtersService.loadFilters(EXECUTIVE_SUMMARY_FILTERS_KEY) || {};
  }

  public applyFilterEvent(value: any) {
    this.filters = value;
    this.filtersService.persistFilters(EXECUTIVE_SUMMARY_FILTERS_KEY, value);
  }
}


