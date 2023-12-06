import {Component, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [],
  templateUrl: './service-section.component.html',
  styleUrl: './service-section.component.css'
})
export class ServiceSectionComponent {
  @ViewChild('slick') slick!: ElementRef;

  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $(this.slick.nativeElement).slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
}
