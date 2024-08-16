import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLinkComponent } from './navbar-link/navbar-link.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarLinkComponent,
    HomeComponent,
    ChatComponent   // components, pipes
  ],
  imports: [
    BrowserModule,  // dependenices modules 
    AppRoutingModule,
    FormsModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
