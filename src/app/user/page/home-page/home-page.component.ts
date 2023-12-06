import { Component } from '@angular/core';
import {FeaturesSectionComponent} from "../../components/doashboard-components/features-section/features-section.component";
import {ServiceSectionComponent} from "../../components/doashboard-components/service-section/service-section.component";
import {TestimonialSectionComponent} from "../../components/doashboard-components/testimonial-section/testimonial-section.component";
import {PartnersSectionComponent} from "../../components/doashboard-components/partners-section/partners-section.component";
import {RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/doashboard-components/footer/footer.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        FeaturesSectionComponent,
        ServiceSectionComponent,
        TestimonialSectionComponent,
        PartnersSectionComponent,
        RouterLink,
        FooterComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
