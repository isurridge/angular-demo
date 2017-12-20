import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsContainerComponent } from './recommendations-container.component';

describe('RecommendationsContainerComponent', () => {
  let component: RecommendationsContainerComponent;
  let fixture: ComponentFixture<RecommendationsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
