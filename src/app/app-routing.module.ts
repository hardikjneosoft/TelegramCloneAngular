import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { loginGuardGuard } from './login-guard.guard';
import { ProfileImageComponent } from './profile-image/profile-image.component';

const routes: Routes = [
  
  {
    path:"",
    pathMatch:"full",
    redirectTo:'home',
    // redirectTo:"chat",
    // component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent 
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'code',
    component:VerificationCodeComponent
  },

  {
    path:'signup',
    component:SignupComponent,
    children:[
      {
        path:'code',
        component:VerificationCodeComponent
      }
    ]
  },
  {
    path:'chat',
    component:ChatComponent,
    canActivate:[loginGuardGuard],
  },
  {
    path:'profile-image',
    component:ProfileImageComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
