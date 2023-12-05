import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [],
  templateUrl: './partners-section.component.html',
  styleUrl: './partners-section.component.css'
})
export class PartnersSectionComponent implements AfterViewInit{
  @ViewChild('slick') slick!:  ElementRef;

  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $(this.slick.nativeElement).slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-angle-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-angle-right"></i></div>',
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 800,
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
