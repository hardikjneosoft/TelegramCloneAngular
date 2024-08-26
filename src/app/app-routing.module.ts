import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:'home',
    // component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent,
  }
  ,
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'home',
    component:HomeComponent //change this
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
