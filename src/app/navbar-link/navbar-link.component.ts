import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar-link',
  templateUrl: './navbar-link.component.html',
  styleUrls: ['./navbar-link.component.css']
})
export class NavbarLinkComponent {
    @Input() link: string = '';
    @Input() text: string = '';

    @ViewChild('hoverEffect') hoverEffect!: ElementRef;

    handleMouseOver() {
        if (this.hoverEffect && this.hoverEffect.nativeElement) {
            this.hoverEffect.nativeElement.style.transform = 'scaleX(1)';
        }
    }

    handleMouseOut() {
        if (this.hoverEffect && this.hoverEffect.nativeElement) {
            this.hoverEffect.nativeElement.style.transform = 'scaleX(0)';
        }
    }
}
