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
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { ProfileImageComponent } from './profile-image/profile-image.component';

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
    ProfileImageComponent,
  ],
  imports: [
    BrowserModule,  // dependenices modules 
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],  //services
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
