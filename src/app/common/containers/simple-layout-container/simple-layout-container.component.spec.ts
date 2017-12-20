import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLayoutContainerComponent } from './simple-layout-container.component';

describe('SimpleLayoutContainerComponent', () => {
  let component: SimpleLayoutContainerComponent;
  let fixture: ComponentFixture<SimpleLayoutContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleLayoutContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleLayoutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
