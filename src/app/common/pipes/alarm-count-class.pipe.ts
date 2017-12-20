import { Pipe, PipeTransform } from '@angular/core';
import { WARNING_THRESHOLD, DANGER_THRESHOLD } from '../services/alarms.service';

@Pipe({
  name: 'alarmCountClass'
})
export class AlarmCountClassPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let className: string;

    if (value <= WARNING_THRESHOLD) {
      className = 'badge-info';
    } else if (value > WARNING_THRESHOLD && value < DANGER_THRESHOLD) {
      className = 'badge-warning';
    } else {
      className = 'badge-danger';
    }

    return className;
  }

}
