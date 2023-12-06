import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {FooterComponent} from "./components/doashboard-components/footer/footer.component";
import {HomePageComponent} from "./page/home-page/home-page.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    AppComponent,
    FooterComponent,
    HomePageComponent,
    RouterOutlet
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
}
