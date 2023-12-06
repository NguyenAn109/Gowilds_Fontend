import {Component, ElementRef, ViewChild} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-gallery-section-tour',
  standalone: true,
  imports: [],
  templateUrl: './gallery-section-tour.component.html',
  styleUrl: './gallery-section-tour.component.css'
})
export class GallerySectionTourComponent {
  @ViewChild('slick') slick!: ElementRef;

  ngAfterViewInit(): void {
    // Khai báo và cài đặt thông số cho slick slider
    if ($(this.slick.nativeElement).length) {
      $(this.slick.nativeElement).slick({
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
