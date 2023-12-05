import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-login',
  standalone: true,
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
      range: 600,
      elms: [
        {el: $('#shape1'), rate: 1.5},
        {el: $('#shape2'), rate: 1.3},
        {el: $('#shape4'), rate: 1.2},
        {el: $('#shape5'), rate: 0.1},
        {el: $('#shape3'), rate: 0.1},
        {el: $('#shape6'), rate: 0.1},
        {el: $('#shape7'), rate: 0.1}
      ]
    });
  }
}
