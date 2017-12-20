import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-executive-summary-line-chart',
  templateUrl: './executive-summary-line-chart.component.html',
  styleUrls: ['./executive-summary-line-chart.component.css']
})
export class ExecutiveSummaryLineChartComponent{

  @Input() options: any;
  // view: any[] = [1024, 480];
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = false;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = '';
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  // line, area
  autoScale = true;

  constructor(private router: Router) {
  }

  onSelect(event: any) {
    console.log(event);
    this.router.navigateByUrl('/alarms');
  }

}
