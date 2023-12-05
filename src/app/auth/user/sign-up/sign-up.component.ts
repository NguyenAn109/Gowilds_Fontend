import {Component} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpUserComponent {
  ngAfterViewInit(): void {
    // $(window).parallaxmouse({
    //   invert: true,
    //   range: 400,
    //   elms: [
    //     {el: $('#shape1'), rate: 0.8},
    //     {el: $('#shape2'), rate: 0.4},
    //     {el: $('#shape4'), rate: 0.3},
    //     {el: $('#shape5'), rate: 0.2},
    //     {el: $('#shape3'), rate: 0.12},
    //     {el: $('#shape6'), rate: 0.25},
    //     {el: $('#shape7'), rate: 0.19}
    //   ]
    // });
  }
}
