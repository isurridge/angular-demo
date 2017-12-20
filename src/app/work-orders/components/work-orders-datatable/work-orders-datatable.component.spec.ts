import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOrdersDatatableComponent } from './work-orders-datatable.component';

describe('WorkOrdersDatatableComponent', () => {
  let component: WorkOrdersDatatableComponent;
  let fixture: ComponentFixture<WorkOrdersDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOrdersDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOrdersDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
