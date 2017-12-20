import {Component, Input} from '@angular/core';
import {IAlarm} from "../../../common/models/alarms";


@Component({
  selector: 'app-work-orders-wizard',
  templateUrl: './work-orders-wizard.component.html',
  styleUrls: ['./work-orders-wizard.component.scss']
})

export class WorkOrdersWizardComponent {

  selectedAlarm: any = {};
  showWorkOrderAlarms = false;
  current: number = 0;
  @Input() rows: any = {};

  selectAlarm(alarm: IAlarm) {
    this.selectedAlarm = alarm;
    this.rows.forEach((a: IAlarm) => a.active = false);
    alarm.active = !(alarm.active);
  }

  finishFunction() {
    alert(`POST something eg:\n\n${JSON.stringify(this.selectedAlarm)}`);
  }

  print() {
    window.print();
    return false;
  }


}
