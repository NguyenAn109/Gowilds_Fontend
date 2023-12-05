import { Component } from '@angular/core';
import {FeaturesSectionComponent} from "../../components/features-section/features-section.component";
import {ServiceSectionComponent} from "../../components/service-section/service-section.component";
import {TestimonialSectionComponent} from "../../components/testimonial-section/testimonial-section.component";
import {PartnersSectionComponent} from "../../components/partners-section/partners-section.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    FeaturesSectionComponent,
    ServiceSectionComponent,
    TestimonialSectionComponent,
    PartnersSectionComponent,
    RouterLink
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
