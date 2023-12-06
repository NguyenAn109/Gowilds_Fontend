import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {RouterLink} from "@angular/router";
declare var $: any;
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [
    RouterLink
  ],
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
}
