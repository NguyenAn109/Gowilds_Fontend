import { Component } from '@angular/core';
import {GallerySectionTourComponent} from "../../components/gallery-section-tour/gallery-section-tour.component";
import {RouterLink} from "@angular/router";
import {HeaderComponent} from "../../components/header/header.component";


@Component({
  selector: 'app-tour-page',
  standalone: true,
  imports: [
    GallerySectionTourComponent,
    RouterLink,
    HeaderComponent
  ],
  templateUrl: './tour-page.component.html',
  styleUrl: './tour-page.component.css'
})
export class TourPageComponent {

}
