import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { loginGuardGuard } from './login-guard.guard';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:'home',
    // component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent 
  },
  {
    path:'login',
    component:LoginComponent,
    children:[
      {
        path:'code',
        component:VerificationCodeComponent
      }
    ]
  }
  ,
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
    canActivate:[loginGuardGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
