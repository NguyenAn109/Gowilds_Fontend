import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpUserComponent {
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
}
