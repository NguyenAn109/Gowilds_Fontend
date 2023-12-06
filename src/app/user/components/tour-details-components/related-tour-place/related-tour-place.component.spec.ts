import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTourPlaceComponent } from './related-tour-place.component';

describe('RelatedTourPlaceComponent', () => {
  let component: RelatedTourPlaceComponent;
  let fixture: ComponentFixture<RelatedTourPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedTourPlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatedTourPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
