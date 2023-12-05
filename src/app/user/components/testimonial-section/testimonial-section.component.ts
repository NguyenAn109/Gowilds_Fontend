import {Component, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-testimonial-section',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-section.component.html',
  styleUrl: './testimonial-section.component.css'
})
export class TestimonialSectionComponent {
  @ViewChild('slick') slick!: ElementRef;

  ngAfterViewInit(): void {
    if ($(this.slick.nativeElement).length) {
      $(this.slick.nativeElement).slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="prev"><i class="far fa-arrow-left"></i></div>',
        nextArrow: '<div class="next"><i class="far fa-arrow-right"></i></div>'
      });
    }
  }
}
