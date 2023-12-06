import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetalsPageComponent } from './tour-detals-page.component';

describe('TourDetalsPageComponent', () => {
  let component: TourDetalsPageComponent;
  let fixture: ComponentFixture<TourDetalsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourDetalsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourDetalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
