import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLinkComponent } from './navbar/navbar-link/navbar-link.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './chat/aside/aside.component';
import { FilesComponent } from './chat/aside/files/files.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { UserService } from './custom-service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    HomeComponent,
    ChatComponent,
    AsideComponent,
    FilesComponent,
    LoginComponent,
    SignupComponent,
    VerificationCodeComponent,
  ],
  imports: [
    BrowserModule,  // dependenices modules 
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],  //services
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
