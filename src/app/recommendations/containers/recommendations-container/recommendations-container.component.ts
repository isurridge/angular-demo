import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AlarmsService} from '../../../common/services/alarms.service';
import {IAlarm} from "../../../common/models/alarms";

@Component({
  selector: 'app-recommendations-container',
  templateUrl: './recommendations-container.component.html',
  styleUrls: ['./recommendations-container.component.scss'],
  providers: [AlarmsService]

})
export class RecommendationsContainerComponent implements OnInit {

  public rows$: Observable<IAlarm[]>;

  constructor(private alarmsService: AlarmsService) {
  }

  ngOnInit() {
    this.rows$ = this.alarmsService.alarmsWizard$;
    this.alarmsService.getAlarmsWizardData();
  }

}
