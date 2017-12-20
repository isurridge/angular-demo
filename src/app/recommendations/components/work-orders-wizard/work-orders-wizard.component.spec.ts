import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersWizardComponent } from './work-orders-wizard.component';

describe('WorkOrdersWizardComponent', () => {
  let component: WorkOrdersWizardComponent;
  let fixture: ComponentFixture<WorkOrdersWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrdersWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
