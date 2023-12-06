import {Component, ElementRef, ViewChild} from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-place-details-section',
  standalone: true,
  imports: [],
  templateUrl: './place-details-section.component.html',
  styleUrl: './place-details-section.component.css'
})
export class PlaceDetailsSectionComponent {
  @ViewChild('slick') slick!: ElementRef;
  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $($(this.slick.nativeElement)).slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
}
