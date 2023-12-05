import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-features-section',
  standalone: true,
  imports: [],
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent implements AfterViewInit{
  @ViewChild('slick') slick!: ElementRef;

  @ViewChild('counterElement1', { static: false }) counterElement1!: ElementRef;
  @ViewChild('counterElement2', { static: false }) counterElement2!: ElementRef;
  @ViewChild('counterElement3', { static: false }) counterElement3!: ElementRef;
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

    // Khai báo cho counterUp cho từng phần tử counter
    if ($.fn.counterUp) {
      if (this.counterElement1) {
        $(this.counterElement1.nativeElement).counterUp({
          delay: 100,
          time: 4000,
          begin: 0,
          end: 356
        });
      }

      if (this.counterElement2) {
        $(this.counterElement2.nativeElement).counterUp({
          delay: 100,
          time: 4000,
          begin: 0,    // Thiết lập giá trị bắt đầu cho counterElement2
          end: 852
        });
      }

      if (this.counterElement3) {
        $(this.counterElement3.nativeElement).counterUp({
          delay: 100,
          time: 4000,
          begin: 0,    // Thiết lập giá trị bắt đầu cho counterElement3
          end: 99
        });
      }
    } else {
      console.error('CounterUp is not available.');
    }
  }
}
