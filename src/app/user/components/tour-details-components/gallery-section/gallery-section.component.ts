import {Component, ElementRef, ViewChild} from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.css'
})
export class GallerySectionComponent {
  @ViewChild('slick') slick!: ElementRef;
  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $($(this.slick.nativeElement)).slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
}
