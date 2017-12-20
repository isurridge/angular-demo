import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSummaryHealthMeterComponent } from './executive-summary-health-meter.component';

describe('ExecutiveSummaryHealthMeterComponent', () => {
  let component: ExecutiveSummaryHealthMeterComponent;
  let fixture: ComponentFixture<ExecutiveSummaryHealthMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSummaryHealthMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryHealthMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
