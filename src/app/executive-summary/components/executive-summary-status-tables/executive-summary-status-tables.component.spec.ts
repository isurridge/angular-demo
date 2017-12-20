import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSummaryStatusTablesComponent } from './executive-summary-status-tables.component';

describe('ExecutiveSummaryStatusTablesComponent', () => {
  let component: ExecutiveSummaryStatusTablesComponent;
  let fixture: ComponentFixture<ExecutiveSummaryStatusTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSummaryStatusTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryStatusTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
