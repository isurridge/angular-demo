import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSummaryLineChartComponent } from './executive-summary-line-chart.component';

describe('ExecutiveSummaryLineChartNgxComponent', () => {
  let component: ExecutiveSummaryLineChartComponent;
  let fixture: ComponentFixture<ExecutiveSummaryLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSummaryLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
