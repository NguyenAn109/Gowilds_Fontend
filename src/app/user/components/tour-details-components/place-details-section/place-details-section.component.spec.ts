import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceDetailsSectionComponent } from './place-details-section.component';

describe('PlaceDetailsSectionComponent', () => {
  let component: PlaceDetailsSectionComponent;
  let fixture: ComponentFixture<PlaceDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceDetailsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
