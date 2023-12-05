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

export const routes: Routes = [
  {path: "login", component: AuthComponent, children:[
      {path: "", component: LoginUserComponent}
    ]},
  {path: "sign-up", component: AuthComponent, children:[
      {path: "", component: SignUpUserComponent}
    ]},
  { path: 'index',
    component: UserComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'tour', component: TourPageComponent }
    ]},
  { path: 'admin', component: AdminComponent, children: [
      {path: 'login', component: LoginAdminComponent}
    ]},
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  {
    path: '**', component: UserComponent, children: [
      { path: "", component: UserComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
