import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-executive-summary-health-meter',
  templateUrl: './executive-summary-health-meter.component.html',
  styleUrls: ['./executive-summary-health-meter.component.css']
})
export class ExecutiveSummaryHealthMeterComponent {
  @Input() meter: any[];

  colorScheme = {
    domain: ['#5AA454']
  };

  maxCount: any = 25;

  onSelect(event: any) {
    console.log(event);
  }

}
