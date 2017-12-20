import { Component, OnInit } from '@angular/core';
import { WorkOrdersService } from '../../../common/services/work-orders.service';
import { Observable } from 'rxjs/Observable';
import { IWorkOrder } from "../../../common/models/work-orders";

@Component({
  selector: 'app-work-orders-container',
  templateUrl: './work-orders-container.component.html',
  styleUrls: ['./work-orders-container.component.scss'],
  providers: [WorkOrdersService]
})
export class WorkOrdersContainerComponent implements OnInit {
  public rows$: Observable<IWorkOrder[]>;
  public filters: any = {};
  public filterOptions = {
    statusSelect: true,
    ticketNumber: true,
    policeDispatch: true,
    storeNumber: true,
    alarmTypesSelect: true,
    actionSelect: true,
    openDate: true,
    closeDate: true,
    requestedDate: true,
  };

  constructor(private workOrdersService: WorkOrdersService) {

  }

  ngOnInit() {
    this.rows$ = this.workOrdersService.chartData$;
    this.workOrdersService.getWorkOrderDatatableData();
  }

  public applyFilterEvent(value: any) {
    console.log('selectedFilters', value);
    this.filters = value;
  }

}

