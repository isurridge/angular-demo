import {Component, ViewEncapsulation, ViewChild, Input} from '@angular/core';


@Component({
  selector: 'app-alarms-datatable',
  templateUrl: './alarms-datatable.component.html',
  styleUrls: ['./alarms-datatable.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class AlarmsDatatableComponent {
  @ViewChild('myTable') table: any;
  @Input() rows: any = {};
  public expanded: any = {};


  toggleExpandRow(row: any) {
    this.table.rowDetail.toggleExpandRow(row);

  }

  approveRecommendation(row: any) {
    alert(row);
  }

}
