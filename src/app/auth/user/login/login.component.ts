import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
declare var $: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginUserComponent {
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  constructor(private renderer: Renderer2) {}
  togglePasswordVisibility() {
    const input: HTMLInputElement = this.passwordInput.nativeElement;

    // Toggle icon class (assuming you are using font-awesome)
    const icon: Element | null = input.nextElementSibling;
    this.renderer.removeClass(icon, 'fa-eye');
    this.renderer.removeClass(icon, 'fa-eye-slash');
    this.renderer.addClass(icon, input.type === 'password' ? 'fa-eye' : 'fa-eye-slash');

    // Toggle input type between 'password' and 'text'
    input.type = input.type === 'password' ? 'text' : 'password';
  }
  ngAfterViewInit(): void {
    $(window).parallaxmouse({
      invert: true,
      range: 400,
      elms: [
        { el: $('#shape1'), rate: 0.8 },
        { el: $('#shape2'), rate: 0.4 },
        { el: $('#shape4'), rate: 0.3 },
        { el: $('#shape5'), rate: 0.2 },
        { el: $('#shape3'), rate: 0.12 },
        { el: $('#shape6'), rate: 0.25 },
        { el: $('#shape7'), rate: 0.19 }
      ]
    });
  }
}
