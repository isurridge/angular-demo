import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsContainerComponent } from './alarms-container.component';

describe('AlarmsContainerComponent', () => {
  let component: AlarmsContainerComponent;
  let fixture: ComponentFixture<AlarmsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
