import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AlarmsService} from '../../../common/services/alarms.service';
import {IAlarm} from "../../../common/models/alarms";

@Component({
  selector: 'app-alarms-container',
  templateUrl: './alarms-container.component.html',
  styleUrls: ['./alarms-container.component.scss'],
  providers: [AlarmsService]

})
export class AlarmsContainerComponent implements OnInit {

  public rows$: Observable<IAlarm[]>;

  constructor(private alarmsService: AlarmsService) {

  }

  ngOnInit() {
    this.rows$ = this.alarmsService.alarmsDataTable$;
    this.alarmsService.getAlarmsData();
  }

}
