import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';


@Component({
  selector: 'app-work-orders-datatable',
  templateUrl: './work-orders-datatable.component.html',
  styleUrls: ['./work-orders-datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class WorkOrdersDatatableComponent {
  @ViewChild('myTable') table: any;
  @Input() rows: any = {};
  public expanded: any = {};


  toggleExpandRow(row: any) {
    this.table.rowDetail.toggleExpandRow(row);

  }

}
