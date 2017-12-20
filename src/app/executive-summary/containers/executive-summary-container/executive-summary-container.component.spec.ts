import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveSummaryContainerComponent } from './executive-summary-container.component';

describe('ExecutiveSummaryContainerComponent', () => {
  let component: ExecutiveSummaryContainerComponent;
  let fixture: ComponentFixture<ExecutiveSummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveSummaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
