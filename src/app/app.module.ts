import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent   // components, pipes
  ],
  imports: [
    BrowserModule,  // dependenices modules 
    AppRoutingModule
  ],
  providers: [],  //services
  bootstrap: [AppComponent] //root component
})
export class AppModule { }
