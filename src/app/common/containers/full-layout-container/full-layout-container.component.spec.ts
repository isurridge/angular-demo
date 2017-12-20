import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullLayoutContainerComponent } from './full-layout-container.component';

describe('FullLayoutContainerComponent', () => {
  let component: FullLayoutContainerComponent;
  let fixture: ComponentFixture<FullLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
