import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersContainerComponent } from './work-orders-container.component';

describe('WorkOrdersContainerComponent', () => {
  let component: WorkOrdersContainerComponent;
  let fixture: ComponentFixture<WorkOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
