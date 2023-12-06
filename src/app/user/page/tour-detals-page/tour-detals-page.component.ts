import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {
  RelatedTourPlaceComponent
} from "../../components/tour-details-components/related-tour-place/related-tour-place.component";
import {GallerySectionTourComponent} from "../../components/gallery-section-tour/gallery-section-tour.component";
import {
  PlaceDetailsSectionComponent
} from "../../components/tour-details-components/place-details-section/place-details-section.component";

@Component({
  selector: 'app-tour-detals-page',
  standalone: true,
  imports: [
    HeaderComponent,
    RelatedTourPlaceComponent,
    GallerySectionTourComponent,
    PlaceDetailsSectionComponent
  ],
  templateUrl: './tour-detals-page.component.html',
  styleUrl: './tour-detals-page.component.css'
})
export class TourDetalsPageComponent {

}
