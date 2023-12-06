import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {NgModule} from "@angular/core";
import {TourPageComponent} from "./user/page/tour-page/tour-page.component";
import {HomePageComponent} from "./user/page/home-page/home-page.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginUserComponent} from "./auth/user/login/login.component";
import {LoginAdminComponent} from "./auth/admin/login/login.component";
import {SignUpUserComponent} from "./auth/user/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "./auth/user/forgot-password/forgot-password.component";
import {TourDetalsPageComponent} from "./user/page/tour-detals-page/tour-detals-page.component";

export const routes: Routes = [
  {path: "login", component: AuthComponent, children:[
      {path: "", component: LoginUserComponent}
    ]},
  {path: "sign-up", component: AuthComponent, children:[
      {path: "", component: SignUpUserComponent}
    ]},
  {path: "forgot-password", component: AuthComponent, children:[
      {path: "", component: ForgotPasswordComponent}
    ]},
  {path: 'index',
    component: UserComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'tour', component: TourPageComponent },
      { path: 'tour/tour-details', component: TourDetalsPageComponent }
    ]},
  {path: 'admin', component: AuthComponent, children: [
      {path: 'login', component: LoginAdminComponent}
    ]},
  {path: '', redirectTo: '/index', pathMatch: 'full' },
  {path: '**', component: UserComponent, children: [
      { path: "", component: UserComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
