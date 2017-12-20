import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationContainerComponent } from './confirmation-container.component';

describe('ConfirmationContainerComponent', () => {
  let component: ConfirmationContainerComponent;
  let fixture: ComponentFixture<ConfirmationContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
