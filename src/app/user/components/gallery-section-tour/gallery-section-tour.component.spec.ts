import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySectionTourComponent } from './gallery-section-tour.component';

describe('GallerySectionTourComponent', () => {
  let component: GallerySectionTourComponent;
  let fixture: ComponentFixture<GallerySectionTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GallerySectionTourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GallerySectionTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
