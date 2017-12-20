import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {AlarmsDatatableComponent} from "./alarms-datatable.component";


describe('AlarmsDatatableComponent', () => {
  let component: AlarmsDatatableComponent;
  let fixture: ComponentFixture<AlarmsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
