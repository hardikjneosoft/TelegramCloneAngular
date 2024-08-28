import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TelegramClone';
  showNavbar:boolean=true;
  constructor(private router:Router,){}       

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.showNavbar = !this.router.url.includes('/chat');
    });
  }
}

