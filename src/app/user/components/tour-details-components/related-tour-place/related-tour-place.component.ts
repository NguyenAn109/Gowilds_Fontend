import { Component, ElementRef, ViewChild } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-related-tour-place',
  standalone: true,
  imports: [],
  templateUrl: './related-tour-place.component.html',
  styleUrl: './related-tour-place.component.css',
})
export class RelatedTourPlaceComponent {
  @ViewChild('slick') slick!: ElementRef;

  sliderArrows: string = '.your-arrow-selector'; // Replace with the actual selector for your arrow container

  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $($(this.slick.nativeElement)).slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        appendArrows: this.sliderArrows, // Use the defined sliderArrows
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
    }
  }
}
